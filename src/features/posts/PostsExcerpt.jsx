import React from 'react'
import { TimeAgo } from './TimeAgo';
import { CommentsList } from '../comments/CommentsList';
import { useDispatch } from 'react-redux';
import { voteIncremented, voteDecremented } from './postsSlice';

export const PostsExcerpt = ({ post }) => {

    const dispatch = useDispatch();


  return (
        <article  class="border-2 rounded-2xl border-slate-500" key={post.id}>
            <h3 class="text-3xl mt-10 mb-2">{post.data.title}</h3>
            <img src={post.data.thumbnail} alt={post.data.title} class="h-100 w-170"/>
            <p class="mt-0.5" >By: {post.data.author} <TimeAgo timestamp={post.date} /> </p>
            <p>{post.data.selftext}</p>
            <br/>
            <div class="flex gap-2 justify-center items-center border-2 w-1/2 rounded-3xl">
                <button class="border-2 rounded-3xl hover:cursor-pointer" onClick={() => dispatch(voteDecremented(post.id))}>-</button>
                <p>Votes:{post.votes}</p>
                <button class="border-2 rounded-3xl hover:cursor-pointer" onClick={() => dispatch(voteIncremented(post.id))}>+</button>
            </div>
            <br/>
            <div>
                <p class="text-2xl">{post.data.num_comments}</p>
                <CommentsList post={post} />
            </div>
        </article>  
  )
}

