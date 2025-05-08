import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post.',
        image: 'https://via.placeholder.com/150',
        author: 'Max Gemereth',
        votes: 0,
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'This is the content of the second post.',
        image: 'https://via.placeholder.com/150',
        author: 'Bradley Michael',
        votes: 0,
      },
      {
        id: 3,
        title: 'Third Post',
        content: 'This is the content of the third post.',
        image: 'https://via.placeholder.com/150',
        author: 'Carolina Gemereth',
        votes: 0,
      }
  ],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

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
    });

export const { voteIncremented, voteDecremented } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post.id === postId);

export default postsSlice.reducer;