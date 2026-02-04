import React from 'react'

function SkillsCard({Name,Count}) {
  return (
    <div className='flex flex-1 flex-col  border-2 border-gray-100 rounded p-4'>
      <div className="text-3xl font-bold text-gray-800 ">{Count}</div>
          <div className="text-xs text-gray-400">{Name}</div>
    </div>
  )
}

export default SkillsCard
