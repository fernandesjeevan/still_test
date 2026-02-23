from sqlalchemy import (
    TIMESTAMP,
    BigInteger,
    Boolean,
    ForeignKey,
    String,
    Integer,
    Identity,
    Text,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from ..db.base import Base
from datetime import datetime


class STUserSkills(Base):
    __tablename__ = "ST_UserSkills"
    user_skill_id: Mapped[int] = mapped_column(
        Integer, Identity(start=1, cycle=False), primary_key=True, index=True
    )

    skill_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    skill: Mapped[str | None] = mapped_column(String(100))
    proficiency_level: Mapped[int | None] = mapped_column(Integer, nullable=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    employee: Mapped[int | None] = mapped_column(
        Integer,  # ForeignKey("nc_employee_details.user_id"),
        nullable=True,
    )
    status: Mapped[str | None] = mapped_column(String(200), nullable=True)
    line_manager: Mapped[int | None] = mapped_column(
        Integer,  # ForeignKey("nc_employee_details.user_id"),
        nullable=True,
    )
    comments: Mapped[str | None] = mapped_column(Text, nullable=True)
    manager_rating: Mapped[int | None] = mapped_column(Integer, nullable=True)
    category: Mapped[str | None] = mapped_column(String(400), nullable=True)
    new_skill_request: Mapped[bool | None] = mapped_column(Boolean, nullable=True)
    requested_skill: Mapped[str | None] = mapped_column(String(400), nullable=True)
    current_stage: Mapped[str | None] = mapped_column(String(200), nullable=True)
    assigned_to: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_run_flow: Mapped[bool | None] = mapped_column(Boolean, nullable=True)

    created_on: Mapped[datetime] = mapped_column(
        TIMESTAMP, server_default=func.now(), default=func.now()
    )

    modified_on: Mapped[datetime] = mapped_column(
        TIMESTAMP, onupdate=func.now(), default=func.now()
    )

    action_taken_by: Mapped[str | None] = mapped_column(String(1000), nullable=True)
    request_number: Mapped[str | None] = mapped_column(String(200), nullable=True)

    row_version: Mapped[int | None] = mapped_column(BigInteger)

    blob_path: Mapped[str | None] = mapped_column(String(255), nullable=True)
    filename: Mapped[str | None] = mapped_column(String(255), nullable=True)
    requestor_email: Mapped[str | None] = mapped_column(Text, nullable=True)
    submitted_proficiency: Mapped[int | None] = mapped_column(Integer, nullable=True)
    updated_proficiency: Mapped[int | None] = mapped_column(Integer, nullable=True)
    # Relationships
    # employee_details: Mapped["EmployeeDetails"] = relationship(
    #     foreign_keys=[employee]
    # )

    # manager_details: Mapped["EmployeeDetails"] = relationship(
    #     foreign_keys=[line_manager]
    # )
