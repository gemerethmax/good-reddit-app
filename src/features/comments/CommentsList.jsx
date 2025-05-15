import { selectAllComments, commentAdded } from '../comments/commentsSlice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const CommentsList = ({ post }) => {

        const dispatch = useDispatch();

        const comments = useSelector(selectAllComments);
        
        const renderedComments = comments.filter((comment) => 
            comment.postId === post.id).map((comment) => (
            <article key={comment.id}>
                <h3>{comment.content}</h3>
            </article>
        ));
;

        const [comment, setComment] = useState('');


        return (
            <> 
                <div class="ml-auto mr-auto mt-10 mb-5 w-1/2 ">
                    <h4 class="text-2xl">Comments:</h4>
                    <p class="mt-2">{renderedComments}</p>
                </div>
                <div>
                <label class="text-2xl text-emerald-300"htmlFor="comment">Add a comment:  </label>
                    <input class="border-2 rounded-2xl" type="text" placeholder=" ..." id="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <button class="border-2 rounded-xl hover:cursor-pointer" onClick={() => {
                            dispatch(commentAdded({id: comments.length + 1, postId: post.id, content: comment}));
                            setComment('');
                        }}> Submit </button>
                </div>
                   
            </>   
                
    )
    }