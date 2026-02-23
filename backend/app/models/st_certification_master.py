from sqlalchemy import (
    Integer,
    String,
    Boolean,
    LargeBinary,
    Identity,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class STCertificationMaster(Base):
    __tablename__ = "ST_CertificationMaster"

    certification_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    certification_name: Mapped[str | None] = mapped_column(String(1000), nullable=True)
    issuing_authority: Mapped[str | None] = mapped_column(String(500), nullable=True)

    is_active: Mapped[bool | None] = mapped_column(Boolean, nullable=True)
    sla: Mapped[int | None] = mapped_column(Integer, nullable=True)
    eligible_for_claim: Mapped[bool | None] = mapped_column(Boolean, nullable=True)

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary,
        nullable=True
    )

    requires_id: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        server_default="0"
    )
