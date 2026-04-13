import React from 'react'
import {useState,useEffect} from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from "../components/Header.jsx"
import HomeDashboard from '../components/HomeDashboard.jsx'
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
function HomePage() {
  console.log("do i come herer")
  const [isLoading,setLoading] = useState(true)
  const navigate = useNavigate();
   const accessToken = Cookies.get('access_token');
   console.log(accessToken)
  // const [isLoggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
  const checkAuth = async () => {
    const res = await fetch("http://localhost:8000/", {
      method:"GET",
      credentials:"include"
    })

    if(!res.ok){
      Cookies.remove("access_token")
      navigate("/login")
    }
  }

  checkAuth()
}, [])
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
