import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const POSTS_URL = 'https://www.reddit.com/r/pics.json';

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed' | 'done'
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data.data.children;
}
);

export const fetchPostsBySubReddit = createAsyncThunk('posts/fetchPostsBySubReddit', async (subReddit) => {
  const sub = subReddit.replace(/ /g, '+');
  const response = await axios.get(`https://www.reddit.com/r/${sub}.json`);
  return response.data.data.children;
}
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(fetchPostsBySubReddit.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPostsBySubReddit.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload
            
          })
          .addCase(fetchPostsBySubReddit.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
        }
    });




export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;


export default postsSlice.reducer;