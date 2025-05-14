import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    comments: [
        { id: 1, postId: 1, content: "Goat of Goats", },
        { id: 2, postId: 1, content: "AIR", },
        { id: 3, postId: 1, content: "His Airness", },
        { id: 4, postId: 1, content: "The OG 2-3", },
        { id: 5, postId: 2, content: "RIP King", },
        { id: 6, postId: 2, content: "Mr. 4192", },
        { id: 7, postId: 2, content: "Big Red Machine!", },
        { id: 8, postId: 2, content: "Put him in the Hall!!", },
        { id: 9, postId: 3, content: "Joe Brrr", },
        { id: 10, postId: 3, content: "Joe Shiesty", },
        { id: 11, postId: 3, content: "Ice in his veins", },
        { id: 12, postId: 3, content: "#9 on the field, #1 in our hearts", },
        
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
