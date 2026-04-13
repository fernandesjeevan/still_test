import pytest
from fastapi.testclient import TestClient
from app.main import app

# --- Fake User ---
class FakeUser:
    def __init__(self, email="test@test.com", employee_id=1):
        self.email = email
        self.employee_id = employee_id


# --- Fake DB ---
class FakeDB:
    def __init__(self, existing_user=False):
        self.existing_user = existing_user

    def execute(self, stmt):
        class Result:
            def __init__(self, existing_user):
                self.existing_user = existing_user

            def first(self):
                return [1] if self.existing_user else None

            def scalars(self):
                return self

            def all(self):
                return []

            def mappings(self):
                return self

        return Result(self.existing_user)

    def add(self, obj):
        pass

    def commit(self):
        pass

    def refresh(self, obj):
        pass


# --- TestClient fixture ---
@pytest.fixture
def client():
    return TestClient(app)


# --- Auth override fixture ---
@pytest.fixture
def override_user():
    from app.utils.authenticate_user import get_current_active_user

    def _override(email="test@test.com"):
        def fake_user():
            return FakeUser(email=email)
        app.dependency_overrides[get_current_active_user] = fake_user

    yield _override
    app.dependency_overrides = {}


# --- DB override fixture ---
@pytest.fixture
def override_db():
    from app.api.core.dependencies import get_db

    def _override(existing_user=False):
        def fake_db():
            return FakeDB(existing_user=existing_user)
        app.dependency_overrides[get_db] = fake_db

    yield _override
    app.dependency_overrides = {}