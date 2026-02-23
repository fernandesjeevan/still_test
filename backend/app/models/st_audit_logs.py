from sqlalchemy import (
    Integer,
    String,
    LargeBinary,
    Identity,
    Text,
    func,
    TIMESTAMP
)
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime
from app.db.base import Base


class STAuditLogs(Base):
    __tablename__ = "ST_AuditLogs"

    audit_log_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    actioned_by: Mapped[int | None] = mapped_column(Integer, nullable=True)
    action_taken: Mapped[str | None] = mapped_column(String(4000), nullable=True)

    action_time: Mapped[datetime | None] = mapped_column(
        LargeBinary,
        nullable=True
    )

    stage: Mapped[str | None] = mapped_column(String(200), nullable=True)
    comment: Mapped[str | None] = mapped_column(Text, nullable=True)
    request_number: Mapped[str | None] = mapped_column(String(200), nullable=True)

    created_on: Mapped[datetime | None] = mapped_column(
        TIMESTAMP,
        nullable=True
    )

    modified_on: Mapped[datetime | None] = mapped_column(
        TIMESTAMP,
        nullable=True,
        default=func.now()
    )

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary,
        nullable=True
    )

    actioned_by_email: Mapped[str | None] = mapped_column(Text, nullable=True)
