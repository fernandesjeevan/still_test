from pydantic import BaseModel,Field

class SkillSubmissionFormSchema(BaseModel):
    submitter_id :int
    submitter_name:str 
    submitter_email:str
    skill: str
    proficiency_level:int = Field(lt=6,gt=0)
    description:str|None = None
    evidence: str|None = None
    approver_id:int
    approver_name:str #= Field(alias="approverName")
    approver_email:str #= Field(alias="approverEmail")
