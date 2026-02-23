from sqlalchemy import (
    Integer,
    String,
    LargeBinary,
    Identity,
    TIMESTAMP,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime
from app.db.base import Base


class NCMonitorLogParent(Base):
    __tablename__ = "NC_MonitorLog_Parent"

    monitor_log_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    session_id: Mapped[str | None] = mapped_column(String, nullable=True)
    user_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    process_name: Mapped[str | None] = mapped_column(String(1000), nullable=True)

    created_on: Mapped[datetime | None] = mapped_column(
        TIMESTAMP,
        nullable=True,
        server_default=func.now()
    )

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary,
        nullable=True
    )
