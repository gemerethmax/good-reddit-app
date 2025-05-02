import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
        state.posts.push(action.payload);
        },
        postRemoved: (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    },
    });

export const { postAdded, postRemoved } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post.id === postId);

export default postsSlice.reducer;