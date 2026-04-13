from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

# def test_me_success(monkeypatch):

    # class FakeUser:
    #     email = "test@example.com"

    # def fake_get_current_user():
    #     return FakeUser()

    # # override dependency
    # app.dependency_overrides = {}
    # from app.utils.authenticate_user import get_current_active_user
    # app.dependency_overrides[get_current_active_user] = fake_get_current_user

    # response = client.get("/auth/me")

    # assert response.status_code == 200
    # assert response.json() == {"email": "test@example.com"}

def test_me_success(client, override_user):
    override_user(email="jeevan@test.com")

    response = client.get("/auth/me")

    assert response.status_code == 200
    assert response.json() == {"email": "jeevan@test.com"}