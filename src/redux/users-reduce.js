
let initialState = {
    users: [
        {
            id: 1, fullName: 'Nikola', followed: true, avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-fa0f3975e34b8449bad064b22bc5a77f.png',
    status: 'My nae Patrick', location: { country: 'Russia', cityName: 'Moscow' }
        },
        {
            id: 2, fullName: 'Dasha', followed: false, avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-fa0f3975e34b8449bad064b22bc5a77f.png',
    status: 'I am fine', location: { country: 'Russia', cityName: 'Piter' }
        },
        {
            id: 3, fullName: 'Julia', followed: true, avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-fa0f3975e34b8449bad064b22bc5a77f.png',
    status: 'Fuck the sistem', location: { country: 'Russia', cityName: 'Totti' }
        },

    ],
}

const usersReduce = (state = initialState, action) => {

    switch (action.type) {


        default:
            return state
    }
}



export default usersReduce