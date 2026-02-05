import {useState} from 'react'



function TopSkills() {
  
const [topSkills, setTopSkills] = useState([
  { id: 1, name: "Python", count: 40 },
  { id: 2, name: "Excel", count: 30 },
  { id: 3, name: "SQL", count: 25 },
  { id: 4, name: "React", count: 20 },
]);
const greenLevels = [
  "bg-green-400", // darkest (top 1)
  "bg-green-300",
];

  return (
    
    <div className='bg-white rounded-lg p-4 m-4 grid grid-cols-1 shadow-sm border-gray-700'>
      <h1 className=" text-gray-700 font-semibold flex flex-col mb-4"> Technical Skills</h1>
      {
        topSkills.map(topSkill=>{
          const colorClass = topSkill.id < 3 ? greenLevels[0] : topSkill.id<  5 ? greenLevels[1]: "bg-red-300";
          return(
          

          <div key={topSkill.id} className={`flex p-2 ${topSkill.id%2? "bg-gray-100":"bg-white"}`}>

            <h4 className="mx-4 font-bold">{topSkill.id}</h4>
            <h4 className= {`mx-10 px-3 rounded-xs ${colorClass}`} >{topSkill.count}</h4>
            <h4 className="mx-10">{topSkill.name}</h4>
            

          </div>

        )})
      }
    </div>
  )
}

export default TopSkills
