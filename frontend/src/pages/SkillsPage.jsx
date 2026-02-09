import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import SkillsDashboard from '../components/SkillsDashboard.jsx'

export default function SkillsPage() {
  return (
    <div className='relative flex h-screen overflow-hidden'>
      <div className='flex w-fit'>
        <Sidebar/>
      </div>
      <div className='flex flex-1 flex-col overflow-hidden'>
        <Header pageName={"Skills"} />
        <SkillsDashboard/>
      </div>
    </div>
  )
}