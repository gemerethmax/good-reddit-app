import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    comments: [],
    loadedPostIds: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
 }


export const fetchSubRedditComments = createAsyncThunk('comments/fetchComments', async ({postId, subReddit} ) => {
    const sub = subReddit.replace(/ /g, '+');
    const response = await axios.get(`https://www.reddit.com/r/${sub}/comments/${postId}.json`);
    return response.data[1].data.children;
})


 const subReddditCommentsSlice = createSlice({
    name: "subRedditComments",
    initialState,
    reducers: {
        commentAdded: (state, action) => {
            state.comments.push(action.payload);
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubRedditComments.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSubRedditComments.fulfilled, (state, action) => {
                const postId = action.meta.arg.postId;
                if (!state.loadedPostIds.includes(postId)) {
                    state.loadedPostIds.push(postId);
                }
                state.status = "succeeded";
                state.comments = state.comments.concat(action.payload);
               ;
            })
            .addCase(fetchSubRedditComments.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            
    },

})

export default subReddditCommentsSlice.reducer;

export const selectAllSubRedditComments = (state) => state.subRedditComments.comments;
export const getSubRedditCommentsStatus = (state) => state.subRedditComments.status;
export const getSubRedditsCommentsError = (state) => state.subRedditComments.error;

export const { commentAdded } = subReddditCommentsSlice.actions;
