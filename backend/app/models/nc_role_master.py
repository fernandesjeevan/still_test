from sqlalchemy import (
    Integer,
    String,
    LargeBinary,
    Identity,
    Text,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class NCRoleMaster(Base):
    __tablename__ = "NC_RoleMaster"

    role_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    role: Mapped[str | None] = mapped_column(String(100), nullable=True)
    service_line: Mapped[str | None] = mapped_column(String(1000), nullable=True)

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary,
        nullable=True
    )

    email: Mapped[str | None] = mapped_column(Text, nullable=True)
