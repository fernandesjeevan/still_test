from sqlalchemy import (
    Integer,
    String,
    Boolean,
    LargeBinary,
    Identity,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class STSkillMaster(Base):
    __tablename__ = "ST_SkillMaster"

    skill_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    skill_name: Mapped[str | None] = mapped_column(String(400), nullable=True)
    category: Mapped[str | None] = mapped_column(String(400), nullable=True)

    is_active: Mapped[bool | None] = mapped_column(Boolean, nullable=True)

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary,
        nullable=True
    )
