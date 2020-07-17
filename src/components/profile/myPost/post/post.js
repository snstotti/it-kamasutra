import React from 'react'
import s from './post.module.css'


const Post = ({message}) => {
    return (
       
        <div className={s.wrapper}>
            <div className={s.post}>
                <img className={s.avatar} src='https://st3.depositphotos.com/5509648/19453/i/450/depositphotos_194538628-stock-photo-funny-sketch-pit-bull-portrait.jpg' alt='' />
                <div className={s.post__text}>
                    <span>
                        {message}
                    </span>
                </div>
            </div>
        </div>

              
    )
}

export default Post