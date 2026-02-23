from sqlalchemy import (
    Integer,
    String,
    Identity,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class STSkillProficiencyLevels(Base):
    __tablename__ = "ST_SkillProficiencyLevels"

    id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    category: Mapped[str] = mapped_column(
        String(500),
        nullable=False
    )

    proficiency_level: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )

    tooltip: Mapped[str] = mapped_column(
        String(500),
        nullable=False
    )

    level: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )