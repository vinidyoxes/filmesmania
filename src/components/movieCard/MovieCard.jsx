import React from 'react'
import styles from './movieCard.module.css'
import {FaStar} from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import { motion } from "framer-motion";
import Entrance from '../FramerAnimations/Entrance/Entrance';


const MovieCard = ({title,image,data,rate, button,id}) => {
  return (

    

      <div className={styles.movieCard} key={id} style={{backgroundImage:`url("${image}")`}}>
          <Link to={`/movies/${id}`} className={styles.link}>
        <div className={styles.beforeCard}>

            <div className='textos' style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'start', padding:'2rem 1rem', gap:'0.2rem', width:'100%'}}>
                <h2 style={{width:'100%', fontSize:'16px'}}>{title}</h2>
                <div className="rate" style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                <span><FaStar color='orange'/></span>
                <p style={{fontSize:"14px"}}>{rate}</p>
                </div>

            </div>
          </div>  
            </Link>
        </div>
    
  )
}

export default MovieCard