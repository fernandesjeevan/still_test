from sqlalchemy import (
    Integer,
    String,
    LargeBinary,
    TIMESTAMP,
    Identity,
    func,
    Text,
)
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime
from app.db.base import Base


class NCMonitorLogChild(Base):
    __tablename__ = "NC_MonitorLog_Child"

    monitor_child_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    session_id: Mapped[str | None] = mapped_column(Text, nullable=True)
    action_type: Mapped[str | None] = mapped_column(String(500), nullable=True)
    action_details: Mapped[str | None] = mapped_column(Text, nullable=True)
    screen_name: Mapped[str | None] = mapped_column(String(100), nullable=True)
    control_name: Mapped[str | None] = mapped_column(String(100), nullable=True)

    timestamp: Mapped[datetime | None] = mapped_column(
        TIMESTAMP,
        nullable=True,
        server_default=func.now()
    )

    status: Mapped[str | None] = mapped_column(String(200), nullable=True)
    error_details: Mapped[str | None] = mapped_column(Text, nullable=True)
    app_version: Mapped[str | None] = mapped_column(String(500), nullable=True)

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary,
        nullable=True
    )
