import { Outlet } from "react-router-dom"
import { PostsList } from "../features/posts/PostsList"
import { SubReddits } from "../features/posts/SubReddits"

export const HomeLayout = () => {
    return (
        <>
            <PostsList />
            <SubReddits />
                <Outlet />
        </>
    )
}