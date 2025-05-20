import React from 'react'
import { TimeAgo } from './TimeAgo';
import { CommentsList } from '../comments/CommentsList';



export const PostsExcerpt = ({ post }) => {

  
    
  return (
        <article  class="border-2 rounded-2xl border-slate-500" key={post.id}>
            <h3 class="text-3xl mt-10 mb-2">{post.data.title}</h3>
            <div class="flex w-full justify-between items-center">
                <button class="border-2 rounded-3xl hover:text-red-500 hover:cursor-pointer" 
                >⬇️</button>
                <p>{post.data.score}</p>
                <button class="border-2 rounded-3xl  hover:text-green-500 hover:cursor-pointer" >⬆️</button>
               <img src={post.data.url} alt={post.data.title} class="h-100 w-170"/> :   
            </div> 
            <p class="mt-0.5 ml-40" >posted by: {post.data.author} <TimeAgo timestamp={post.data.created} /> </p>
            <p>{post.data.selftext}</p>
            <br/>
            
            <br/>
            <div>
               
                <CommentsList post={post} />
            </div>
        </article>  
  )
}

