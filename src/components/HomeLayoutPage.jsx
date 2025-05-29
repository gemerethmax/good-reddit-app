import { Outlet } from "react-router-dom"
import { PostsList } from "../features/posts/PostsList"
import { SubReddits } from "../features/posts/SubReddits"


export const HomeLayout = () => {

   

    return (
        <div class="w-full flex">
            <div class="w-3/5">
                <PostsList />
            </div>
            <div>
                <SubReddits />
            </div>
            <Outlet />
        </div>
    )
}