import React from 'react'
import preloader from './../preloaders/preloader.svg'
import s from './../preloaders/preloader.module.css'

const Preloader =()=>{
    return(
        <div className={s.preloader}>
            <img src={preloader} alt='preloader'/>
        </div>
    )
}

export default Preloader