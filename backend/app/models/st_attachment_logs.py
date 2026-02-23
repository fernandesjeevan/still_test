from sqlalchemy import (
    Integer,
    String,
    Identity,
    Text,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class STAttachmentLogs(Base):
    __tablename__ = "ST_AttachmentLogs"

    attachment_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    blob_path: Mapped[str | None] = mapped_column(Text, nullable=True)
    file_name: Mapped[str | None] = mapped_column(Text, nullable=True)
    type: Mapped[str | None] = mapped_column(String(200), nullable=True)
    parent_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
