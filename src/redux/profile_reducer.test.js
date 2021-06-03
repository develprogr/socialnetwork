import profileReducer, { addPostAC, setStatusAC } from "./profile_reducer";

const state = {
    posts: [
        { id: 1, message: 'Hi! It\'s my first post.', likes_count: 25 },
        { id: 2, message: 'Hello. How are you?', likes_count: 5 },
        { id: 3, message: 'How is it going today?', likes_count: 25 },
    ],
    status: ''
};


test('Length of posts should be increment', () => {
    let newState = profileReducer(state, addPostAC('Test add new post'));
    expect(newState.posts.length).toBe(4);
});

test('Status should be updated', () => {
    let newState = profileReducer(state, setStatusAC('Hello world'));
    expect(newState.status).toBe('Hello world');
});
