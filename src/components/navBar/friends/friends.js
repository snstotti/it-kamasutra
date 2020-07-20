import React from 'react'
import s from './friends.module.css'

const Friend =()=>{
    return(
        <div>
            <div>
                <img className={s.friend__avatar} src='https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-92c6795c1aeb1055f3b0c13fdb068272.png' alt='' />
            </div>
            <div>
                <span>Misha</span>
            </div>
        </div>
    )
}

const Friends = () => {
    return (
        <div className={s.friends}>
            <div>
                <h2>Friends</h2>
            </div>
            <div className={s.friends__block}>
                <Friend />
            </div>
        </div>
    )
}

export default Friends