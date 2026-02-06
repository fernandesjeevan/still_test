import HomePage from './pages/HomePage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 

  return (
    <div className='h-screen bg-slate-50'>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<HomePage/>}></Route>
      <Route path ="/skill" element={<SkillsPage/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App
