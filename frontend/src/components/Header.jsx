import React from 'react'
import house from '../assets/house.png'
function Header({pageName}) {
  {console.log(pageName, "Header props")}
  return (
    <div className='h-15 border-l-0 border-2 border-gray-300 drop-shadow-amber-50  flex items-center '>
        <img className="mx-3 h-6 w-6"src  = {house} alt="home icons"/>
      <h1 className='font-sans'>Dashboard</h1>
      <h1 className = "mx-4">{`>`}</h1>
      <h1 className ="font-sans">{pageName}</h1>
    </div>
  )
}

export default Header
