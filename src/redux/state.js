import {rerenderTree} from '../render'

let state = {

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Nikola' },
            { id: 2, name: 'Dasha' },
            { id: 3, name: 'July' },
            { id: 4, name: 'Marinad' },
        ],

        messages: [
            { id: 1, message: 'How are you frend' },
            { id: 2, message: 'i am fine' },
            { id: 3, message: 'My name Rukarot' },
            { id: 4, message: 'happy days' },
        ]
    },

    profilePage: {
        newPostText: '',
        myPostsData: [
            { id: 1, post: 'How are you frend', likeCount: 10 },
            { id: 2, post: 'i am fine', likeCount: 0 },
            { id: 3, post: 'My name Rukarot', likeCount: 3 },
            { id: 4, post: 'happy days', likeCount: 5 },
        ]
    }
}

export let onPostChange = (postMessage) => {
    state.profilePage.newPostText=postMessage
    rerenderTree(state)
}

export let addPost = () => {
    let post = {
        id: 9, post: state.profilePage.newPostText, likeCount: 0
    }
    state.profilePage.myPostsData.push(post)
    state.profilePage.newPostText=''
    rerenderTree(state)
}

export default state