import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Routes path='/' element={<HomePage />}/>
        <Routes path='/login' element={<LoginPage />}/>
        <Routes path='/Profile' element={<ProfilePage />}/>
      </Routes>
    </div>
  )
}

export default App
