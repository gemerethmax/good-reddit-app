import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const POSTS_URL = 'https://www.reddit.com/r/popular.json';

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

export const fetchPostsBySubReddit = createAsyncThunk('posts/fetchPostsBySubReddit', async (subReddit) => {
  const sub = subReddit.replace(/ /g, '+');
  const response = await axios.get(`https://www.reddit.com/r/${sub}.json`);
  console.log(response.data.data.children); //Example: To get the author of the 5th post it woudld be [4].data.author. There's also title, # of comments, selftext, thumbnail, url to the single comment page
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
          .addCase(fetchPostsBySubReddit.fulfilled, (state, action) => {
            state.status = 'done';
            state.posts = action.payload
            console.log(state.posts);
          })
      },
    });




export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;


export default postsSlice.reducer;