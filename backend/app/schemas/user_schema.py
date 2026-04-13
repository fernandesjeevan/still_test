from pydantic import BaseModel, EmailStr
from datetime import datetime, date
from typing import Optional


class NCEmployeeBase(BaseModel):
    employee_id: Optional[str]
    full_name: Optional[str]
    job_location: Optional[str]
    email: Optional[EmailStr]
    service_line: Optional[str]
    job_title: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]
    middle_name: Optional[str]
    band: Optional[str]
    date_joined: Optional[date]
    line_manager: Optional[str]
    line_manager_email: Optional[EmailStr]
    business_unit: Optional[str]
    country_code: Optional[str]
    is_active: Optional[bool]
    l2_line_manager_name: Optional[str]
    l2_line_manager_email: Optional[EmailStr]

class NCEmployeeCreate(NCEmployeeBase):
    password: str


class NCEmployeeRead(NCEmployeeBase):
    user_id: int
    created_on: datetime
    modified_on: Optional[datetime]
    row_version: Optional[bytes]

    model_config = {
        "from_attributes": True  # REQUIRED for SQLAlchemy ORM objects
    }

class NCEmployeeLogin(BaseModel):
    employee_id: str
    email: EmailStr