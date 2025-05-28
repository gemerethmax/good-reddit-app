import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import subRedditCommentsReducer from '../features/subredditComments/subRedditCommentsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    subRedditComments: subRedditCommentsReducer,
  },
});

