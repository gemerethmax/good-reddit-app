import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const POSTS_URL = 'https://www.reddit.com/r/bengals.json';

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  console.log(response.data.data.children); //Example: To get the author of the 5th post it woudld be [4].data.author. There's also title, # of comments, selftext, thumbnail, url to the single comment page
  return response.data.data.children;
}
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        voteIncremented: (state, action) => {
          const post = state.posts.find(post => post.id === action.payload);
          if (post) {
            post.votes += 1;
          }
        },
        voteDecremented: (state, action) => {
          const post = state.posts.find(post => post.id === action.payload);
          if (post) {
            post.votes -= 1;
          }
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = state.posts.concat(action.payload)
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });

export const { voteIncremented, voteDecremented } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post.id === postId);

export default postsSlice.reducer;