import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    comments: []
 }

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentAdded: (state, action) => {
            state.comments.push(action.payload);
        },
        
    },

})

export default commentsSlice.reducer;
export const selectAllComments = (state) => state.comments.comments;
export const { commentAdded } = commentsSlice.actions;
