/* eslint-disable no-unused-vars */
import { useState } from 'react'
import viteLogo from '/vite.svg'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Home/>
      </div>
    </>
  )
}

export default App
