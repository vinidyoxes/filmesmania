import React from 'react'
import styles from './movieCard.module.css'

const MovieCard = ({title,image,data}) => {
  return (
    <div className={styles.movieCard}>
        <img src={image}></img>
        <h2>{title}</h2>
        <p>{data}</p>
    </div>
  )
}

export default MovieCard