from sqlalchemy import (
    Column,
    Integer,
    String, 
    Boolean,
    Date,
    TIMESTAMP,
    BigInteger,
)

from sqlalchemy.sql import func
from app.db.base import Base

class EmployeeDetails(Base):
    __tablename__ = "employee_details"

    user_id = Column(Integer, primary_key=True, index=True)

    employee_id = Column(String(500), nullable=True)
    full_name = Column(String(2000), nullable=True)
    job_location = Column(String(200), nullable=True)
    email = Column(String(200), nullable=True)
    service_line = Column(String(1000), nullable=True)
    job_title = Column(String(200), nullable=True)
    first_name = Column(String(500), nullable=True)
    last_name = Column(String(500), nullable=True)
    created_on = Column(TIMESTAMP, server_default=func.now())
    modified_on = Column(TIMESTAMP, onupdate=func.now())
    middle_name = Column(String(500), nullable=True)
    band = Column(String(50), nullable=True)
    date_joined = Column(Date, nullable=True)
    line_manager = Column(String(200), nullable=True)
    line_manager_email = Column(String(1000), nullable=True)
    business_unit = Column(String(1000), nullable=True)

    row_version = Column(BigInteger)

    country_code = Column(String(20), nullable=True)
    is_active = Column(Boolean, nullable=True)
    l2_line_manager_name = Column(String(200), nullable=True)
    l2_line_manager_email = Column(String(1000), nullable=True)
