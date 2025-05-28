import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    comments: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
 }


export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
    const response = await axios.get(`https://www.reddit.com/r/pics/comments/${postId}.json`);
    return response.data[1].data.children;
})




 const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentAdded: (state, action) => {
            state.comments.push(action.payload);
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.comments = state.comments.concat(action.payload);
                ;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            
    },

})

export default commentsSlice.reducer;

export const selectAllComments = (state) => state.comments.comments;
export const getCommentsStatus = (state) => state.comments.status;
export const getCommentsError = (state) => state.comments.error;

export const { commentAdded } = commentsSlice.actions;
