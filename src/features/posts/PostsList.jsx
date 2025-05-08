import { useSelector, useDispatch } from 'react-redux';
import {  voteIncremented, voteDecremented } from './postsSlice';
import { selectAllPosts } from './postsSlice';
import { TimeAgo } from './TimeAgo';

export const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();

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
            
        </article>  
))

    return (
        <section>
            <h2>POSTS</h2>
            {content}
        </section>
    )

}