import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/auth/me", {
      credentials: "include"
    })
      .then(res => setAuth(res.ok))
      .catch(() => setAuth(false))
  }, [])

  if (auth === null) return <div>Loading...</div>

  return auth ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoutes

// import { Navigate, Outlet } from 'react-router-dom';
// // import useAuth from '../hooks/authProvider.jsx'; // Custom hook to check auth status
// import Cookies from 'js-cookie';
// const PrivateRoutes = () => {
//   const accessToken = Cookies.get('access_token');
//   console.log("cookie:", Cookies.get("access_token"))
// //   const accessToken = Cookies.get('access_token');
// //   const token = localStorage.getItem("access_token") // checks if user is logged in
//   return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default PrivateRoutes;
