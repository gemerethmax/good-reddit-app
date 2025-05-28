import { NavLink } from "react-router-dom"

export const About = () => {
    return (
        <section class="ml-auto mr-auto mt-10 w-3/4">
            <div class="ml-auto mr-auto mt-10 w-3/4">
                <h2 class="text-5xl mb-3">About</h2>
                    <p>This is a Reddit-inspired web application built with <strong>React</strong> for the UI, <strong>Redux Toolkit</strong> for state management, and 
                    styled using <strong>Tailwind CSS</strong> for a sleek, responsive design. 
                    The app leverages <strong>JavaScript (ES6+)</strong>, <strong>Axios</strong> for API requests, and <strong>React Router</strong> for seamless navigation.</p>
                    <p>Users can browse and interact with posts and comments, perform local searches, and explore curated SubReddit pages. 
                    The application features a dynamic voting system for posts, and is fully deployed with <strong>Netlify</strong> for fast, reliable hosting. </p> 
                    <br />
                    <p>Additional tooling includes <strong>Vite</strong> for rapid development and build optimization, 
                    and <strong>Git</strong> for version control.</p>
                    <br/>
                    <p>Built by: </p><NavLink to="/contact" class="text-emerald-300"> <p class="text-emerald-300">Max Gemereth</p></NavLink>
            </div>
        </section>
    )
}