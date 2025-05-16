import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import axios from 'axios';

import MJ from '../../assets/img/MJ.jpg';
import PR from '../../assets/img/PR.jpeg';
import JB from '../../assets/img/JB.jpg';

export const POSTS_URL = 'https://www.reddit.com/r/';

const initialState = {
  posts: [
    {
        id: 1,
        title: 'Michael Jordan',
        image: MJ,
        author: 'Max Gemereth',
        votes: 0,
        date: new Date().toISOString(),
    },
    {
        id: 2,
        title: 'Pete Rose',
        image: PR,
        author: 'Bradley Michael',
        votes: 0,
        date: sub(new Date(), { minutes: 5 }).toISOString(),
      },
      {
        id: 3,
        title: 'Joe Burrow',
        image: JB,
        author: 'Carolina Gemereth',
        votes: 0,
        date: sub(new Date(), { minutes: 10 }).toISOString(),
      }
  ],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
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
            state.posts = state.posts.concat(action.payload);
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