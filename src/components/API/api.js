import Axios from "axios"

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'api-key': '2ed742ce-2034-4d99-84b4-7c09b798fd53' }
})


export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(responce => responce.data)
        )
    }
}

export const followAPI = {

    getFollow(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(responce => responce.data)
        )
    },
    getUnfollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(responce => responce.data)
        )
    }
}

export const profileAPI = {

    getProfile(userId) {
        return (
            instance.get(`profile/` + userId)
                .then(responce => responce.data)
        )
    },

    getStatus(userId){
        return(
            instance.get(`/profile/status/` + userId)
        )
    },

    updateStatus(status){
        return(
            instance.put(`/profile/status/`, {status})
        )
    }

}

export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`)
        )
    }
}