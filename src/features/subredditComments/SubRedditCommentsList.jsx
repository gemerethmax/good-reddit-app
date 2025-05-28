import { selectAllSubRedditComments, commentAdded } from './subRedditCommentsSlice';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubRedditComments } from './subRedditCommentsSlice.jsx';

export const SubRedditCommentsList = ({ post, subReddit }) => {

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchSubRedditComments({postId: post.data.id, subReddit} ));
        }
        , [post.data.id, subReddit, dispatch]);

        const comments = useSelector(selectAllSubRedditComments);
        
        const postComments = comments.filter((comment) => 
            comment.data.parent_id === `t3_${post.data.id}`).map((comment) => (
            <article class="border-2 rounded-3xl p-2 m-2" key={comment.data.id}>
                <p>{comment.data.body}</p>
                <p>by: {comment.data.author}</p>
            </article>
        ));
;

        const [comment, setComment] = useState('');

        const [count, setCount] = useState(0);
        let renderedComments = postComments.slice(0, count + 5);
    


        return (
            <> 
                <div class="ml-auto mr-auto mt-10 mb-5 w-1/2 ">
                    <h3 class="text-2xl">{post.data.num_comments} Comments:</h3>
                    <div class="mt-2">{renderedComments}</div>
                    <button class="border-2 rounded-3xl hover:cursor-pointer" onClick={() => {setCount(count + 5)}}>Show more comments</button>
                </div>
                <div>
                <label class="text-2xl text-emerald-300"htmlFor="comment">Add a comment:  </label>
                    <input class="border-2 rounded-2xl" type="text" placeholder=" ..." id="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <button class="border-2 rounded-xl hover:cursor-pointer" onClick={() => {
                            dispatch(commentAdded({id: comments.length + 1, postId: post.data.id, content: comment}));
                            setComment('');
                        }}> Submit </button>
                </div>
                   
            </>   
                
    )
    }