from fastapi import Form
from ...schemas.skill_submission_schema import SkillSubmissionFormSchema
from app.db.session import SessionLocal

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
def skill_form_parser(
    submitterName: str = Form(...),
    submitterId :int = Form(...),
    submitterEmail: str = Form(...),
    skill: str = Form(...),
    rating: int = Form(...),
    description: str = Form(None),
    approverId: int = Form(...),
    approverName: str = Form(...),
    approverEmail: str = Form(...),
)->SkillSubmissionFormSchema:
   
    return SkillSubmissionFormSchema(
        submitter_id = submitterId,
        submitter_name=submitterName,
        submitter_email=submitterEmail,
        skill=skill,
        proficiency_level=rating,
        description=description,
        approver_id = approverId,
        approver_name=approverName,
        approver_email=approverEmail,
    )
