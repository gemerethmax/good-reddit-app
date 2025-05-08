import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    comments: [
        {
            id: 1,
            postId: 1,
            content: "This is the first comment.",
        },
        {
            id: 2,
            postId: 2,
            content: "This is the second comment.",
        },
        {
            id: 3,
            postId: 3,
            content: "This is the third comment.",
        },
        {
            id: 4,
            postId: 4,
            content: "This is the fourth comment.",
        },
        {
            id: 5,
            postId: 5,
            content: "This is the fifth comment.",
        },
    ]
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
