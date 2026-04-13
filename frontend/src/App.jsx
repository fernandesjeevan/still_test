
import HomePage from './pages/HomePage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage.jsx'
import PrivateRoutes from './utils/protectedRoutes.jsx'

function App() {


  return (
    <div className='h-screen  bg-linear-to-b via-violet-100 to bg-pink-100'>
      <ToastContainer/>
    <BrowserRouter>
    <Routes>
      {/* Protected routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/skill" element={<SkillsPage />} />
          </Route>
      
      <Route path = "/login" element = {<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App
