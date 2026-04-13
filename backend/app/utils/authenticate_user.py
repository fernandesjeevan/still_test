from datetime import datetime, timedelta, timezone
from typing import Annotated
from fastapi import Cookie, Depends, HTTPException, Request,status
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..api.core.dependencies import get_db
from ..schemas.user_schema import NCEmployeeBase

from ..models.nc_employee_details import NCEmployeeDetails
from ..utils.hashing import verify_password
import os
from dotenv import load_dotenv
import jwt
load_dotenv = load_dotenv()

ACCESS_TOKEN_EXPIRES = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")
SECRET_KEY = os.getenv("ENCRYPTION_SECRET_KEY")
ALGORITHM = os.getenv("ENCRYPTION_ALGORITHM")

def get_user(db,email:str):
    # stmt = select(NCEmployeeDetails).where(email == NCEmployeeDetails.email) gives tuples needs result[0]
    user = db.query(NCEmployeeDetails).filter(email==NCEmployeeDetails.email).first()
    
    if not user:
        return False
    
    else:
        
        return user
    

def get_token_from_cookie(request: Request):
    token = request.cookies.get("access_token")
    print(request.cookies)
    print("token is token" ,token)

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
        )

    return token
def authenticate_user(db, email:str, password:str):
    user = get_user(db,email)
    if user and verify_password(password,user.password):
        return user    
    else:
        # raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail ="Username or password wrong", headers= {"WWW-Authenticate":"Bearer"})
        return None

def create_access_token(data:dict,expires_delta:timedelta|None):
    to_encode:dict = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc)+expires_delta
    else:
        expire= datetime.now(timezone.utc)+ timedelta(minutes=20)
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode,SECRET_KEY,algorithm =ALGORITHM)
    return encoded_jwt


def get_current_user(access_token:str|None= Cookie(default=None),db:Session = Depends(get_db)):    
    
    if not access_token:
        raise HTTPException(status_code = 401 , detail="Not Authenticated")
    else:
        try:
            payload = jwt.decode(access_token,SECRET_KEY,algorithms=[ALGORITHM])
            email = payload.get("sub")
            if email is None:
                raise HTTPException(status_code=401,detail="invalid token")
            else:
                return get_user(db,email)
        except Exception as e:
            raise Exception("Invalid token",e)

def get_current_active_user(current_user:Annotated[NCEmployeeBase,Depends(get_current_user)]):
 
    if current_user is None:
        return None
    return current_user