import React from "react";
import { useParams } from "react-router-dom";
import { fetchPostsBySubReddit } from "../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "../features/posts/postsSlice";
import { SubReddits } from "../features/posts/SubReddits";
import { SubRedditPostsExcerpt } from "../features/subRedditPosts/SubRedditPostsExcerpt";


export const SubRedditPage = () => {

    const { subReddit } = useParams();

    const status = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    const posts = useSelector(selectAllPosts);

    const dispatch = useDispatch();
    

    useEffect(() => {

        dispatch(fetchPostsBySubReddit(subReddit));
    }
    , [subReddit, dispatch]);

    let content;
    if (status === 'loading') {
        content = <p className="text-2xl">Loading...</p>
    }
    else if (status === 'done') {
        const orderedPosts = posts.slice().sort((a, b) => b.data.created_utc - a.data.created_utc);
        content = orderedPosts.map((post) => (
            <SubRedditPostsExcerpt key={post.data.id} post={post} subReddit={subReddit} />
        ))
    }
    else if (status === 'failed') {
        content = <p>{error}. Reddit's free API data limit met.</p>
    }



    return (
    <div class="w-full flex"> 
        <div class="w-3/5">
            <div class="w-3/4 ml-5 mt-10">
                <h2 class="text-4xl justify-self-center mb-3">Posts from {subReddit} SubReddit</h2>
                {content}
             </div>
        </div>
        <div>
            <SubReddits />
        </div>
    </div>
    )
}