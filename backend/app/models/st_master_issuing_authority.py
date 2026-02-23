from sqlalchemy import (
    Integer,
    String,
    Identity,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class STMasterIssuingAuthority(Base):
    __tablename__ = "ST_Master_IssuingAuthority"

    authority_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    issuing_authority: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )
