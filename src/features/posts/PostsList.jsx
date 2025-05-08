import { useSelector, useDispatch } from 'react-redux';
import {  voteIncremented, voteDecremented, selectAllPosts } from './postsSlice';
import { TimeAgo } from './TimeAgo';
import { selectAllComments, commentAdded } from '../comments/commentsSlice';
import { useState } from 'react';


export const PostsList = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const comments = useSelector(selectAllComments);

    const renderedComments = comments.map((comment) => (
        <p key={comment.id}>{comment.content}</p>
    ));

    const [comment, setComment] = useState('');

    const content = posts.map((post) => ( 
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} />
            <p>Author:{post.author}</p>
            <TimeAgo timestamp={post.date} />
            <br />
            <button onClick={() => dispatch(voteIncremented(post.id))}>+</button>
            <p>Votes:{post.votes}</p>
            <button onClick={() => dispatch(voteDecremented(post.id))}>-</button>
            <h4>Comments:{renderedComments}</h4>
            <label htmlFor="comment">Add a comment:</label>
            <input type="text" placeholder="..." id="comment" onChange={(e) => setComment(e.target.value)}/>
            <button onClick={() => {
                dispatch(commentAdded({id: comments.length + 1, postId: post.id, content: comment}));
                setComment('');
            }}>Submit</button>
            
            
        </article>  
))

    return (
        <section>
            <h2>POSTS</h2>
            {content}
        </section>
    )

}