from sqlalchemy import (
    Integer,
    String,
    Boolean,
    LargeBinary,
    Text,
    Identity,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class NCConfigTable(Base):
    __tablename__ = "NC_ConfigTable"

    config_id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    app_link: Mapped[str | None] = mapped_column(Text, nullable=True)
    process_name: Mapped[str | None] = mapped_column(String(1000), nullable=True)

    row_version: Mapped[bytes|None] = mapped_column(
        LargeBinary  # SQL Server timestamp/rowversion
        # nullable=False
    )

    icon_link: Mapped[str | None] = mapped_column(Text, nullable=True)
    group_col: Mapped[str | None] = mapped_column(String(50), nullable=True)
    sort_order: Mapped[int | None] = mapped_column(Integer, nullable=True)

    is_active: Mapped[bool | None] = mapped_column(
        Boolean,
        nullable=True,
        server_default="1"
    )

    notification: Mapped[str | None] = mapped_column(String(50), nullable=True)
    power_bi_url: Mapped[str | None] = mapped_column(Text, nullable=True)
    process_display_name: Mapped[str | None] = mapped_column(String(1000), nullable=True)
    target_audience: Mapped[str | None] = mapped_column(Text, nullable=True)

    category: Mapped[int | None] = mapped_column(Integer, nullable=True)

    delegation_required: Mapped[bool | None] = mapped_column(Boolean, nullable=True)
    reassign_required: Mapped[bool | None] = mapped_column(Boolean, nullable=True)
