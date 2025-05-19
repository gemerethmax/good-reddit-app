import { NavLink } from "react-router-dom"

export const About = () => {
    return (
        <section class="ml-auto mr-auto mt-10 w-3/4">
            <div class="ml-auto mr-auto mt-10 w-3/4">
                <h2 class="text-5xl mb-3">About</h2>
                    <p>This is a simple Reddit clone built with React and Redux, and styled with TailwindCss.</p>
                    <p>It allows users to read posts and comments, search locally, and render pre-set SubReddit Pages.</p>
                    <p>It also includes a voting system for posts and comments.</p>
                    <br/>
                    <p>Built by: </p><NavLink to="/contact" class="text-emerald-300"> <p class="text-emerald-300">Max Gemereth</p></NavLink>
            </div>
        </section>
    )
}