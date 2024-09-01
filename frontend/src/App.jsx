/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ErrorPage from './ErrorPage'
import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'
// import Toaster from 'react-hot-toast'

function App() {

  const {authUser} = useAuthContext();
  const [server, setServer] = useState(false);

  console.log(server);

  async function checkServer()
  {
    try {
      const response = await axios.get('/api/check');
      const data = response.data;


      if (data.success == true) {
        setServer(true);
      }
    }
    catch {
      setServer(false);
    }
  }

  useEffect(() => {
    checkServer();
  }, [])

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {
          server?
          <Routes>
            <Route path='/' element={authUser? <Home/> : <Navigate to={'/login'}/>} />
            <Route path='/login' element={authUser? <Navigate to={'/'}/> : <Login/>} />
            <Route path='/signup' element={authUser? <Navigate to={'/'}/> : <Signup/>} />
            <Route path='/:any' element={<ErrorPage/>}/>
          </Routes> :
          <Routes>
            <Route path='/' element={<span className='loading loading-spinner'></span>}/>
            <Route path='/:any' element={<span className='loading loading-spinner'></span>}/>
          </Routes>
        }

        <Toaster/>
        
      </div>
    </>
  )
}

export default App
