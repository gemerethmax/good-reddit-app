import { Outlet } from "react-router-dom"
import { PostsList } from "../features/posts/PostsList"
import { SubReddits } from "../features/posts/SubReddits"

export const HomeLayout = () => {
    return (
        <div class="flex flex-col items-center">
            <div class="flex mt-10 ml-5 mb-10">
                <PostsList class="w-3/5"/>
                <SubReddits/>
            </div>
                <Outlet />
        </div>
    )
}