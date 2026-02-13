import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DB_URL")
if not DATABASE_URL:
    raise ValueError("DB_URL is not set in .env")