import SkillsCard from "./SkillsCard.jsx";
import { useState } from "react";




function MySkills({skills}) {
    const [skillCategories,setSkillCategories] = useState([
    {Name:"Language", Count:4},
    {Name:"TechnicalSkills",Count:8},
    {Name:"TechnicalSkills",Count:8},
    {Name:"TechnicalSkills",Count:8},
    {Name:"TechnicalSkills",Count:8},
    {Name: "SoftSkills",Count:16},
    {Name:"DomainSkills",Count:2}]);
    // console.log(skills,"this is skills")
    // const skillListFunc = (skills) =>{
    //     const skillList = {}
    //     skills.map(skill=>{
    //         if(skill.skillType in skillList){
    //             skillList[skill.skillType] +=1;
    //         }
    //         else{
    //             skillList[skill.skillType] =1;
    //         }
    //     })
        
    // }

    // console.log(skillListFunc(skills))
    
  return (
    <div
      className="
        m-4 
        bg-white 
        rounded-lg 
        shadow-sm 
        p-2
        grid
        grid-rows-[auto_1fr]    
      "
    >
      {/* Row 1: Title */}
      <h2 className="m-2 p-2 text-sm font-semibold text-gray-700">My Skills</h2>

      {/* Row 2: Content area */}
      <div
        className="
          grid
         
        "
      >
        {/* Floating box */}
        <div
          className="
          p-4
            mx-4 
            mb-4
            bg-white
            border
            border-gray-100
            rounded-md
            shadow-sm
            flex 
            flex-wrap
            overflow-x-hidden
            gap-2
          "
        >
        {
            skillCategories.map(skilcat=>(
                <SkillsCard {...skilcat}/>
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default MySkills;
