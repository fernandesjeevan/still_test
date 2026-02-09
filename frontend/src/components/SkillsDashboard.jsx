import {useState} from 'react'
import StatusDropdown from './StatusDropdown.jsx'
import SearchBox from "./SearchBox.jsx"
import AddSkillDrawer from "./AddSkillDrawer.jsx";

const categories = ["Technical Skills", "Languages", "Domain","REated","reteara"]

function SkillsDashboard() {
  const [search, setSearch] = useState("");
  const [openDrawer,setOpenDrawer] = useState(false)

   return (
    <>
    <div className="flex flex-col h-full p-2">
      <div className="flex justify-between items-center">
         <h1 className="text-gray-700 font-semibold">Skills</h1>
         <button onClick={()=>setOpenDrawer(true)} className='bg-blue-950 text-white px-2 rounded-lg'>Add Skills</button>
      </div>
      <hr className="my-2 border-t-2 border-blue-500" />
      
      <div className='flex items-center justify-between mb-2'>
        <StatusDropdown></StatusDropdown>
        <SearchBox value={search} onChange={setSearch} />
      </div>
      
      <hr className='mb-2 border-t-2 border-black-300'/>
      
      <div className="border-2 border-gray-700 flex overflow-x-auto justify-between flex-1 ">
       {
        categories.map((category, index)=>(
          <div key={index} className='shrink-0 bg-white rounded-lg m-3 flex-1 min-w-72'>
            <div className='text-gray font-semibold flex justify-between p-2'>
              <h2>{category}</h2>
              <h2>Added</h2>
            </div>
          </div>
        ))
       }
      </div>
    </div>
    <AddSkillDrawer
  open={openDrawer}
  onClose={() => setOpenDrawer(false)}
/>
    </>
  )
}
export default SkillsDashboard