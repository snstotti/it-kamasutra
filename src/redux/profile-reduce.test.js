import React from 'react'
import profileReduce, { addPost, deletePost } from './profile-reduce'

let state = {
    
    myPostsData: [
        { id: 1, post: 'How are you frend', likeCount: 10 },
        { id: 2, post: 'i am fine', likeCount: 0 },
        { id: 3, post: 'My name Rukarot', likeCount: 3 },
        { id: 4, post: 'happy days', likeCount: 5 },
    ]
}

it('the length of posts should increase', ()=>{
    //test data
    let action = addPost('new post yo')

    // actiion
    let newState = profileReduce(state, action)

    // expectation
    expect(newState.myPostsData.length).toBe(5)
})

it('new post should be added', ()=>{
    //test data
    let action = addPost('new post yo')

    // actiion
    let newState = profileReduce(state, action)

    // expectation
    expect(newState.myPostsData[4].post).toBe('new post yo')
})

it('delete message by id', ()=>{
    //test data
    let action = deletePost(4)

    // actiion
    let newState = profileReduce(state, action)

    // expectation
    expect(newState.myPostsData.length).toBe(3)
})

