import React from 'react'
import styles from './movieBanner.module.css'
export const MovieBanner = ({image,movie}) => {
  return (
    <section className={styles.movieBanner} style={{backgroundImage:`url("${image}")`}}>
        <div className={styles.information}>
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
        </div>
    </section>
  )
}
