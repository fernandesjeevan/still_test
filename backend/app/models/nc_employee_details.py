from sqlalchemy import (
    String,
    Boolean,
    Date,
    TIMESTAMP,
    LargeBinary,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base
from datetime import datetime


class NCEmployeeDetails(Base):
    __tablename__ = "NC_EmployeeDetails"

    user_id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True,
        index=True
    )

    employee_id: Mapped[str | None] = mapped_column(String(500), unique=True)
    password: Mapped[str] = mapped_column(String(200),nullable= False)
    full_name: Mapped[str | None] = mapped_column(String(2000))
    job_location: Mapped[str | None] = mapped_column(String(200))
    email: Mapped[str | None] = mapped_column(String(200), unique=True)
    service_line: Mapped[str | None] = mapped_column(String(1000))
    job_title: Mapped[str | None] = mapped_column(String(200))
    first_name: Mapped[str | None] = mapped_column(String(500))
    last_name: Mapped[str | None] = mapped_column(String(500))

    created_on: Mapped[datetime] = mapped_column(
        TIMESTAMP,
        server_default=func.now(),
        nullable=False
    )

    modified_on: Mapped[datetime | None] = mapped_column(
        TIMESTAMP,
        onupdate=func.now(),
        default=func.now()
    )

    middle_name: Mapped[str | None] = mapped_column(String(500))
    band: Mapped[str | None] = mapped_column(String(50))
    date_joined: Mapped[Date | None] = mapped_column(Date)

    line_manager: Mapped[str | None] = mapped_column(String(200))
    line_manager_email: Mapped[str | None] = mapped_column(String(1000))
    business_unit: Mapped[str | None] = mapped_column(String(1000))

    row_version: Mapped[bytes| None] = mapped_column(LargeBinary)

    country_code: Mapped[str | None] = mapped_column(String(20))
    is_active: Mapped[bool | None] = mapped_column(Boolean)
    l2_line_manager_name: Mapped[str | None] = mapped_column(String(200))
    l2_line_manager_email: Mapped[str | None] = mapped_column(String(1000))