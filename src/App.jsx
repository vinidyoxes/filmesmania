import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'

function App() {
 
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  )
}

export default App
