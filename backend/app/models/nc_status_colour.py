from sqlalchemy import (
    Integer,
    String,
    Identity,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class NCStatusColour(Base):
    __tablename__ = "NC_StatusColour"

    id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    status: Mapped[str] = mapped_column(String(100), nullable=False)

    text_colour: Mapped[str | None] = mapped_column(String(50), nullable=True)
    fill_colour: Mapped[str | None] = mapped_column(String(50), nullable=True)
    border_colour: Mapped[str | None] = mapped_column(String(50), nullable=True)
