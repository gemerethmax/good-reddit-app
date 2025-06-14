import { useSelector, useDispatch, } from 'react-redux';
import { PostsExcerpt } from './PostsExcerpt';
import { useEffect } from 'react';
import {  
    selectAllPosts, 
    fetchPosts,
    getPostsStatus,
    getPostsError,
     } from './postsSlice';


export const PostsList = () => {

    const dispatch = useDispatch();
    
    const status = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    const posts = useSelector(selectAllPosts);

    useEffect(() => {
        if (status === 'idle' || status === 'done') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);
    
   let content;
   if (status === 'loading') {
        content = <p className="text-2xl">Loading...</p>
    }
    else if (status === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.data.created_utc - a.data.created_utc);
        content = orderedPosts.map((post) => (
            <PostsExcerpt key={post.data.id} post={post} />
        ))
    }
    else if (status === 'failed') {
        content = <p>{error}. Reddit's free API data limit met.</p>
    }

    return (
        <section class="w-3/4 ml-5 mt-10">
            <h2 class="text-4xl justify-self-center ">POPULAR POSTS</h2>
            {content}
        </section>
    )

}