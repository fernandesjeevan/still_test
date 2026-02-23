from sqlalchemy import (
    Integer,
    String,
    Boolean,
    Identity,
    Text,
)
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class STNavigationBar(Base):
    __tablename__ = "ST_NavigationBar"

    id: Mapped[int] = mapped_column(
        Integer,
        Identity(start=1, cycle=False),
        primary_key=True,
        index=True
    )

    icon_name: Mapped[str | None] = mapped_column(String(100), nullable=True)
    navigation_link: Mapped[str | None] = mapped_column(Text, nullable=True)
    section: Mapped[str | None] = mapped_column(String(50), nullable=True)

    is_active: Mapped[bool | None] = mapped_column(Boolean, nullable=True)
    sort_order: Mapped[int | None] = mapped_column(Integer, nullable=True)

    selected_tab_svg: Mapped[str | None] = mapped_column(Text, nullable=True)
    unselected_tab_svg: Mapped[str | None] = mapped_column(Text, nullable=True)

    country_code_check: Mapped[bool | None] = mapped_column(Boolean, nullable=True)
    country_code: Mapped[str | None] = mapped_column(String(20), nullable=True)
