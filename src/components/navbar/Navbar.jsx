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
    if(!search) return;
    navigate(`/search?q=${search}`)
    setSearch("");
    console.log(search)
  }
  return (
    <nav id="navbar" className={styles.navbar}>
        <Link to='/'><img src='/d85f2d50f6184eabdf7864f0d0a392a1.png'></img></Link>
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