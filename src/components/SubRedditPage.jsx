import React from "react";
import { useParams } from "react-router-dom";
import { fetchPostsBySubReddit } from "../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "../features/posts/postsSlice";
import { SubReddits } from "../features/posts/SubReddits";
import { PostsExcerpt } from "../features/posts/PostsExcerpt";


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
            <PostsExcerpt key={post.data.id} post={post} />
        ))
    }
    else if (status === 'failed') {
        content = <p>{error}</p>
    }



    return (
    <div class="flex flex-row gap-4 justify-center  mt-10 ml-5 mb-10"> 
        <div>
            <h2>{subReddit} SubRedditPage</h2>
            <section class="flex flex-col gap-4 justify-center items-center mt-10 ml-5 mb-10">
                <h2 class="text-4xl">Posts from {subReddit}</h2>
                {content}
            </section>
        </div>
        <div>
            <SubReddits />
        </div>
    </div>
    )
}