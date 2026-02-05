import React from 'react'
import MySkills from './MySkills.jsx'
import MyCertifications from './MyCertifications.jsx'
import TopSkills from './TopSkills.jsx'

const mySkills = [
  { "id": 1, "skillName": "English", "skillType": "Language" },
  { "id": 2, "skillName": "Spanish", "skillType": "Language" },
  { "id": 3, "skillName": "Hindi", "skillType": "Language" },

  { "id": 4, "skillName": "C++", "skillType": "Technical" },
  { "id": 5, "skillName": "JavaScript", "skillType": "Technical" },
  { "id": 6, "skillName": "Python", "skillType": "Technical" },
  { "id": 7, "skillName": "SQL", "skillType": "Technical" },

  { "id": 8, "skillName": "Communication", "skillType": "Soft Skill" },
  { "id": 9, "skillName": "Teamwork", "skillType": "Soft Skill" },
  { "id": 10, "skillName": "Problem Solving", "skillType": "Soft Skill" },

  { "id": 11, "skillName": "React", "skillType": "Framework" },
  { "id": 12, "skillName": "Tailwind CSS", "skillType": "Framework" },
  { "id": 13, "skillName": ".NET Core", "skillType": "Framework" },
  { "id": 14, "skillName": "Node.js", "skillType": "Framework" },
  { "id": 15, "skillName": "Docker", "skillType": "Tool" }
]


function HomeDashboard() { 
  return (
    <div className='w-full  grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll'>
        {/*left side */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-2">
            <MySkills skills={mySkills}/>
            <MyCertifications/>

        </div>
        {/* right side */}
        <div className="lg:col-span-1">
            <TopSkills/>
        </div>

    </div>
  )
}

export default HomeDashboard
