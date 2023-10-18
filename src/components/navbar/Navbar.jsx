import React from 'react'
import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import styles from  './navbar.module.css'


const Navbar = () => {
  return (
    <nav id="navbar" className={styles.navbar}>
        <h2>
        <Link to='/'><BiCameraMovie/>Catalogo</Link>
        </h2>
        <form>
          <input type='text' placeholder='Procure um filme'></input>
          <button type='submit'><BiSearchAlt2/></button>
        </form>
      </nav>
  )
}

export default Navbar