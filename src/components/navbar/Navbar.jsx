import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import styles from  './navbar.module.css'
import { useState } from 'react'

const Navbar = () => {
  const [search,setSearch] = useState('');
  const navigate = useNavigate();

  const handleSumit = (e)=>{
    e.preventDefault();
    navigate(to)
    console.log(search)
  }
  return (
    <nav id="navbar" className={styles.navbar}>
        <h2>
        <Link to='/'><BiCameraMovie/>Catalogo</Link>
        </h2>
        <form onSubmit={handleSumit}>
          <input type='text' placeholder='Procure um filme'  
          onChange={(e)=>{setSearch(e.target.value)}}
          value={search}
          ></input>
          <button type='submit'><BiSearchAlt2 /></button>
        </form>
      </nav>
  )
}

export default Navbar