from sqlalchemy import (
    Integer,
    String,
    Boolean,
    Date,
    LargeBinary,
    Identity,
    TIMESTAMP,
    Text,
)
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime, date
from app.db.base import Base


class STUserCertifications(Base):
    __tablename__ = "ST_UserCertifications"

    user_certification_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    certification_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    certification_number: Mapped[str | None] = mapped_column(String(400), nullable=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)

    employee: Mapped[int | None] = mapped_column(Integer, nullable=True)
    status: Mapped[str | None] = mapped_column(String(200), nullable=True)
    line_manager: Mapped[int | None] = mapped_column(Integer, nullable=True)

    comments: Mapped[str | None] = mapped_column(Text, nullable=True)

    issue_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)

    lifetime_validity: Mapped[bool | None] = mapped_column(Boolean, nullable=True)

    issuing_authority: Mapped[str | None] = mapped_column(String(500), nullable=True)
    requested_certification: Mapped[str | None] = mapped_column(String(1000), nullable=True)
    new_certification_request: Mapped[bool | None] = mapped_column(Boolean, nullable=True)

    current_stage: Mapped[str | None] = mapped_column(String(200), nullable=True)
    assigned_to: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_run_flow: Mapped[bool | None] = mapped_column(Boolean, nullable=True)

    created_on: Mapped[datetime | None] = mapped_column(
        TIMESTAMP,
        nullable=True
    )

    modified_on: Mapped[datetime | None] = mapped_column(
        TIMESTAMP,
        nullable=True
    )

    expired_certification: Mapped[bool | None] = mapped_column(Boolean, nullable=True)

    action_taken_by: Mapped[str | None] = mapped_column(String(1000), nullable=True)
    request_number: Mapped[str | None] = mapped_column(String(200), nullable=True)

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary,
        nullable=True
    )

    blob_path: Mapped[str | None] = mapped_column(Text, nullable=True)
    filename: Mapped[str | None] = mapped_column(String(255), nullable=True)
    requestor_email: Mapped[str | None] = mapped_column(Text, nullable=True)
    update_certification: Mapped[str | None] = mapped_column(String(255), nullable=True)