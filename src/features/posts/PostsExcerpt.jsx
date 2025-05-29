import React from 'react'
import { TimeAgo } from './TimeAgo';
import { CommentsList } from '../comments/CommentsList';
import { useState } from 'react';



export const PostsExcerpt = ({ post }) => {

        const [vote, setVote] = useState(null);


         const handleVote = (direction) => {
                    if (vote === direction) {
                        setVote(null); 
                        } else {setVote(direction)}}

                    const handleDownVote = () => {
                        handleVote('down');
                    }
                    
                    const handleUpVote = () => {
                        handleVote('up');
                    }

    
  return (
        <article  class="border-2 rounded-2xl border-slate-500 mt-10" key={post.id}>
            <h3 class="text-3xl mt-10 mb-2 pl-5">{post.data.title}</h3>
            <div class="pl-5 flex w-full items-center">
                <button class={` border-2 rounded-3xl hover:text-red-500 hover:cursor-pointer ${vote === 'down' ? 'text-red-500 bg-red-100' : ''}`} onClick={handleDownVote}>⬇️</button>
                <p class="ml-2 mr-2">{post.data.score}</p>
                <button class={`border-2 rounded-3xl hover:text-green-500 hover:cursor-pointer ${vote === 'up' ? 'text-green-500 bg-green-100' : ''}`} onClick={handleUpVote} >⬆️</button>
               <img src={post.data.url} alt={post.data.title} class="h-100 w-170 ml-10 pr-5"/>    
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

