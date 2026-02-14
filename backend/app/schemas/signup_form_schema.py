from pydantic import BaseModel,Field

class SignupFormSchema(BaseModel):
    email:str
    password:str 