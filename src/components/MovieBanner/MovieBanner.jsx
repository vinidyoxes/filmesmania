import React from 'react'
import styles from './movieBanner.module.css'
export const MovieBanner = ({image,movie}) => {
  console.log(movie)
  console.log(movie.genres[0].name)
  return (
    <section className={styles.movieBanner} style={{backgroundImage:`url("${image}")`}}>
        <div className={styles.information}>

           <div className={styles.genres}>
            {movie.genres.map((genre)=>{
              console.log(genre.name)
              return(
                <h4>{genre.name}</h4>
              )
            })}
           </div>

            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
        </div>
    </section>
  )
}
