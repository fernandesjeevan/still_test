from contextlib import asynccontextmanager
from fastapi import FastAPI,status,HTTPException    
from .models.user_skills import UserSkills
from .models.employee_details import EmployeeDetails
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
from datetime import datetime
from .utils.hashing import hash_password

origins = ["http://localhost:5173","http://127.0.0.1:5173"]

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



@app.get("/")
async def home():
    return {"message": "helo"}


@app.post("/signup",status_code=status.HTTP_201_CREATED)
async def signup(signup_form: SignupFormSchema, db:Session =Depends(get_db)):
    print("hello")
    stmt = select(EmployeeDetails).where(EmployeeDetails.email==signup_form.email)
    existing_user=db.execute(stmt).first()
    if(existing_user):
         raise HTTPException(   
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    

    # Create new user
    emp_db_obj = EmployeeDetails(
        email = signup_form.email,
        password = hash_password(signup_form.password)
    )
    db.add(emp_db_obj)
    db.commit()
    db.refresh(emp_db_obj)
    return {"message":f"user {signup_form.email} created successfully"}


@app.post("/skillSubmit")
async def skill_submit(
    form_data: SkillSubmissionFormSchema = Depends(skill_form_parser),
    evidence: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    # submitter_name='Jeevan Fernandes' submitter_email='jeevan.fernandes@gmail.com' skill='c++' proficiency_level=3 description='adsfds' evidence=None approver_name='Jeevan Fernandes' approver_email='jeevan.fernandes111@gmail.com'
    submission_obj = SkillSubmissionFormSchema.model_validate(form_data)
    submission_db_obj = UserSkills(

        # submitter_name= submission_obj.submitter_name,
        employee = submission_obj.submitter_id,
        requestor_email= submission_obj.submitter_email,
        skill = submission_obj.skill,
        proficiency_level = submission_obj.proficiency_level,
        description = submission_obj.description,
        line_manager = submission_obj.approver_id,
        created_on = datetime.now()
        # approver_name= submission_obj.approver_name,
        # approver_email = submission_obj.approver_email


        
    )
    db.add(submission_db_obj)
    db.commit()
    # if evidence:
    #     contents = await evidence.read()
        
    #     print("File:", evidence.filename, len(contents)) 
    print(form_data)

    return {"message": "Received successfully"}