from contextlib import asynccontextmanager
from typing import Annotated
from fastapi import FastAPI, Request, Response, status, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from .schemas.user_schema import NCEmployeeBase
from .models.st_user_skills import STUserSkills
from .models.nc_employee_details import NCEmployeeDetails
from .models.st_skill_master import STSkillMaster
from .schemas.skill_submission_schema import SkillSubmissionFormSchema
from .schemas.signup_form_schema import SignupFormSchema
from fastapi.middleware.cors import CORSMiddleware
from fastapi import UploadFile, File, Depends
from .api.core.dependencies import skill_form_parser
from sqlalchemy.orm import Session
from sqlalchemy import select
from .api.core.dependencies import get_db
from .db.base import Base
from .db.session import engine
from datetime import datetime, timedelta
from .utils.hashing import hash_password
from .schemas.token_schema import TokenSchema
from .utils.authenticate_user import authenticate_user, create_access_token, get_current_active_user
import os
from dotenv import load_dotenv
origins = ["http://localhost:5173"]

load_dotenv()

ACCESS_TOKEN_EXPIRES  = os.getenv("ACCESS_TOKEN_EXPIRES_MINUTES")
# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     print(">>> LIFESPAN START")
#     print(">>> TABLES:", Base.metadata.tables.keys())
#     Base.metadata.create_all(bind=engine)
#     print(">>> CREATE_ALL DONE")
#     yield
app = FastAPI()




app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# @app.on_event("startup")
# def on_startup():
#     Base.metadata.create_all(bind=engine)

@app.get("/auth/me")
def me(current_user: NCEmployeeBase = Depends(get_current_active_user)):
    return {"email": current_user.email}

@app.get("/")
async def home(current_user: Annotated[NCEmployeeBase,Depends(get_current_active_user)]):
    if current_user is None:
        return {"UnAuthenticated":"Please try again"}
    return {"current_user": current_user.email}


@app.get("/my-skills")
async def get_my_skills(current_user: Annotated[NCEmployeeBase,Depends(get_current_active_user)], db:Session = Depends(get_db)):
    # print(current_user.__dict__)
    stmt = select(STUserSkills).where(STUserSkills.employee == current_user.employee_id)
    user_skills = db.execute(stmt).scalars().all()
    return {"my_skills": user_skills}


@app.get("/skills")
async def get_skills(current_user: Annotated[NCEmployeeBase,Depends(get_current_active_user)], db:Session = Depends(get_db)):
    stmt = select(STSkillMaster.skill_id,STSkillMaster.skill_name,STSkillMaster.category).where(STSkillMaster.is_active)
    user_skills = db.execute(stmt).mappings().all()
    # for row in user_skills:
    #     print(row)
    return {"skills": user_skills}


@app.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(signup_form: SignupFormSchema, db: Session = Depends(get_db)):
    # print("hello")
    stmt = select(NCEmployeeDetails).where(NCEmployeeDetails.email == signup_form.email)
    existing_user = db.execute(stmt).first()
    print(existing_user)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered"
        )

    
    # Create new user
    emp_db_obj = NCEmployeeDetails(
        email=signup_form.email, password=hash_password(signup_form.password)
    )
    print(hash_password(signup_form.password))
    db.add(emp_db_obj)

    db.commit()
    db.refresh(emp_db_obj)
    return {"message": f"user {signup_form.email} created successfully"}


@app.post("/token", status_code=status.HTTP_200_OK)
async def login(
    response: Response,
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: Session = Depends(get_db)
):

    user = authenticate_user(db, form_data.username, form_data.password)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email or Password is wrong",
            headers={"WWW-Authenticate": "Bearer"}
        )

    access_token_expires = timedelta(minutes=int(ACCESS_TOKEN_EXPIRES))
    access_token = create_access_token(
        data={"sub": user.email},
        expires_delta=access_token_expires
    )
    
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=False,
        samesite="lax",
        max_age=int(ACCESS_TOKEN_EXPIRES) * 60,
        path="/"
    )

    return {"message": "login successful"}
@app.post("/skillSubmit")
async def skill_submit(
    current_user: Annotated[NCEmployeeBase, Depends(get_current_active_user)],
    form_data: SkillSubmissionFormSchema = Depends(skill_form_parser),
    
    evidence: UploadFile = File(None),
    db: Session = Depends(get_db),
):
    try:
        print(form_data,"this is formdaata")

        # submitter_name='Jeevan Fernandes' submitter_email='jeevan.fernandes@gmail.com' skill='c++' proficiency_level=3 description='adsfds' evidence=None approver_name='Jeevan Fernandes' approver_email='jeevan.fernandes111@gmail.com'
        submission_obj = SkillSubmissionFormSchema.model_validate(form_data)
        print(submission_obj)
        submission_db_obj = STUserSkills(
            # submitter_name= submission_obj.submitter_name,
            employee=submission_obj.submitter_id,
            requestor_email=submission_obj.submitter_email,
            skill=submission_obj.skill,
            proficiency_level=submission_obj.proficiency_level,
            description=submission_obj.description,
            line_manager=submission_obj.approver_id,
            created_on=datetime.now(),
            # approver_name= submission_obj.approver_name,
            # approver_email = submission_obj.approver_email
        )
        db.add(submission_db_obj)
        db.commit()
        # if evidence:
        #     contents = await evidence.read()

        #     print("File:", evidence.filename, len(contents))
        # print(form_data)

        return {"message": "Received successfully"}
    except Exception as e:
        print(e)
