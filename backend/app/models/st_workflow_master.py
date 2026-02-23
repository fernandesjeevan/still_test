from sqlalchemy import (
    Integer,
    String,
    Identity,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class STWorkflowMaster(Base):
    __tablename__ = "ST_WorkflowMaster"

    workflow_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    process: Mapped[str | None] = mapped_column(String(1000), nullable=True)
    current_stage: Mapped[str | None] = mapped_column(String(500), nullable=True)
    next_stage: Mapped[str | None] = mapped_column(String(500), nullable=True)
    assigned_to: Mapped[str | None] = mapped_column(String(500), nullable=True)
    condition: Mapped[str | None] = mapped_column(String(1000), nullable=True)