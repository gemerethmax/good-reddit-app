import { useSelector, useDispatch } from 'react-redux';
import {  voteIncremented, voteDecremented, selectAllPosts } from './postsSlice';
import { TimeAgo } from './TimeAgo';
import { CommentsList } from '../comments/CommentsList';




export const PostsList = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    
    const content = posts.map((post) => ( 
        <article  class="border-2 rounded-2xl border-slate-500" key={post.id}>
            <h3 class="text-3xl mt-10 mb-2">{post.title}</h3>
            <img src={post.image} alt={post.title} class="h-100 w-170"/>
            <p class="mt-0.5">By: {post.author} <TimeAgo timestamp={post.date} /> </p>
            <br/>
            <div class="flex gap-2 justify-center items-center border-2 w-1/2 rounded-3xl">
                <button class="border-2 rounded-3xl hover:cursor-pointer" onClick={() => dispatch(voteIncremented(post.id))}>+</button>
                <p>Votes:{post.votes}</p>
                <button class="border-2 rounded-3xl hover:cursor-pointer" onClick={() => dispatch(voteDecremented(post.id))}>-</button>
            </div>
            <br/>
            <div>
                <CommentsList post={post} />
            </div>
        </article>  
))

    return (
        <section class="flex flex-col gap-4 justify-center items-center mt-10 ml-5 mb-10">
            <h2 class="text-4xl">POSTS</h2>
            {content}
        </section>
    )

}