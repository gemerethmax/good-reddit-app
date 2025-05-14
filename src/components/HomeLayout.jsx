import { Outlet } from "react-router-dom"
import { PostsList } from "../features/posts/PostsList"
import { SubReddits } from "../features/posts/SubReddits"

export const HomeLayout = () => {
    return (
        <>
            <div class="flex">
                <PostsList />
                <SubReddits />
            </div>
                <Outlet />
        </>
    )
}