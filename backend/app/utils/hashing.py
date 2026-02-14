from pwdlib import PasswordHash
from typing import Tuple, Optional

# Initialize PasswordHash with the recommended schemes
# It supports bcrypt by default and can be configured for others like Argon2
pwd_context = PasswordHash.recommended()
    # Optional: configure specific schemes if needed,
    # otherwise defaults are used.
    # schemes=["argon2id", "bcrypt"],
    # argon2id__mem_cost = 65536


def hash_password(password: str) -> str:
    """Hashes a plain text password."""     
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies a plain text password against a hashed one."""
    # The verify method handles salt extraction and comparison automatically
    return pwd_context.verify(plain_password, hashed_password)

def verify_and_update_password(plain_password: str, hashed_password: str) -> Tuple[bool, Optional[str]]:
    """
    Verifies a password and checks if the hash needs upgrading to a newer algorithm.
    Returns (is_correct, new_hash)
    """
    return pwd_context.verify_and_update(plain_password, hashed_password)
