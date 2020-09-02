import React from 'react'
import preloader from './../preloaders/preloader.svg'
import s from './../preloaders/preloader.module.css'



const Preloader =({size = 50})=>{
    let preloadStyle = {
        width: size
    }
    return(
        <div className={s.preloader}>
            <img src={preloader}  style={preloadStyle} alt='preloader'/>
        </div>
    )
}

export default Preloader