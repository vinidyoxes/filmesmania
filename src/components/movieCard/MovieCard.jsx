import React from 'react'
import styles from './movieCard.module.css'
import {FaStar} from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'


const MovieCard = ({title,image,data,rate, button,id}) => {
  return (

    <div className={styles.movieCard} key={id}>
        <Link to={`/movies/${id}`} className={styles.link}>
          <img src={image} className={styles.image}></img>
          <div className='textos' style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', padding:'2rem 1rem', gap:'1rem'}}>
            <div style={{display:'flex', width:'100%'}}>
              <h2 style={{width:'80%'}}>{title}</h2>
              <div className="rate" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <span><FaStar color='orange'/></span>
              <h4>{rate}</h4>
              </div>

            </div>
          <p>{data}</p>
          </div>
          </Link>
      </div>
  )
}

export default MovieCard