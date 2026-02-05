import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from "../components/Header.jsx"
import HomeDashboard from '../components/HomeDashboard.jsx'

function HomePage() {
  return (
    <div className="relative w-full h-full border-2 flex">
      <Sidebar/>
      <div className='flex flex-1 flex-col border-gray-700'>
      <Header pageName="Home"/>
      
      <HomeDashboard/>
      </div>
    </div>
  )
}

export default HomePage
