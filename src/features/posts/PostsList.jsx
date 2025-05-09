import { useSelector, useDispatch } from 'react-redux';
import {  voteIncremented, voteDecremented, selectAllPosts } from './postsSlice';
import { TimeAgo } from './TimeAgo';
import { CommentsList } from '../comments/CommentsList';




export const PostsList = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    
    const content = posts.map((post) => ( 
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} />
            <p>By: {post.author}</p>
            <TimeAgo timestamp={post.date} />
            <br />
            <button onClick={() => dispatch(voteIncremented(post.id))}>+</button>
            <p>Votes:{post.votes}</p>
            <button onClick={() => dispatch(voteDecremented(post.id))}>-</button>
            <CommentsList post={post} />
        </article>  
))

    return (
        <section>
            <h2>POSTS</h2>
            {content}
        </section>
    )

}