import { PostsList } from "../features/posts/PostsList"
import { SubReddits } from "../features/posts/SubReddits"

export const Home = () => {
    return (
        <>
            <PostsList />
            <SubReddits />
        </>
    )
}