import React from 'react'
import styles from './movieBanner.module.css'
import { RxDividerVertical } from "react-icons/rx";

export const MovieBanner = ({image,movie}) => {
  return (
    <section className={styles.movieBanner} style={{backgroundImage:`url("${image}")`}}>
        <div className={styles.information}>
          <div className={styles.subheader}>
           <div className={styles.genres}>
            {movie.genres.map((genre)=>{
              return(
                <><h4>{genre.name}</h4><RxDividerVertical></RxDividerVertical></>

                
              )
            })}
           </div>
             {movie.vote_average.toFixed(1)}
          </div>
            <h2 className={styles.title}>{movie.title}</h2>
            <p>{movie.tagline} </p>

            
        </div>
    </section>
  )
}
