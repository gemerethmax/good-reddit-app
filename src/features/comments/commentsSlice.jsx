import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    comments: [
        { id: 1, postId: 1, content: "This is the first comment.", },
        { id: 2, postId: 1, content: "This is the second comment.", },
        { id: 3, postId: 1, content: "This is the third comment.", },
        { id: 4, postId: 1, content: "This is the fourth comment.", },
        { id: 5, postId: 2, content: "This is the fifth comment.", },
        { id: 6, postId: 2, content: "This is the sixth comment.", },
        { id: 7, postId: 2, content: "This is the seventh comment.", },
        { id: 8, postId: 2, content: "This is the eighth comment.", },
        { id: 9, postId: 3, content: "This is the ninth comment.", },
        { id: 10, postId: 3, content: "This is the tenth comment.", },
        { id: 11, postId: 3, content: "This is the eleventh comment.", },
        { id: 12, postId: 3, content: "This is the twelfth comment.", },
        
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
