import React, { Component } from 'react'
import s from './users.module.css'
import * as axios from 'axios'

class Users extends Component {

    componentWillMount(){
        axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            debugger
            return this.props.showUsers(response.data.items)
        })
    }

render() {
    const {usersPage, followeds, unFolloweds} = this.props
    let avatar = 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-fa0f3975e34b8449bad064b22bc5a77f.png'

    let userShow = usersPage.map(user => {
        return (
            <div key={user.id} className={s.userSection}>

                <div className={s.avatarBlock}>
                    <div>
                        <img src={user.photos.small || avatar} className={s.avatarUser} alt='' />
                    </div>
                    <div>
                        <button onClick={user.followed
                            ? () => followeds(user.id)
                            : () => unFolloweds(user.id)}>{user.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </div>

                <div className={s.description}>
                    <div className={s.userInfo}>
                        <span>{user.name}</span>
                        <span>{user.status}</span>
                    </div>
                    <div className={s.userInfo}>
                        <span>user.location.cityName</span>
                        <span>user.location.country</span>
                    </div>
                </div>

            </div>
        )
    })

    return (
        <div className={s.usersBlock}>
            {userShow}
        </div>
    )
}
    
}

export default Users