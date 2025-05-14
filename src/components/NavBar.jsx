import { NavLink } from "react-router-dom";
import redditLogo from '../assets/img/Reddit_logo.png';

const NavBar = () => {

    return(
        <header > 
            <nav class="width-full bg-slate-600 p-4">
                <div class="flex items-center justify-between w-3/4 ml-auto mr-auto">
                    <div >
                        <NavLink to="/" class="flex items-center gap-x-2"><img class="size-7" src={redditLogo} alt="Reddit Logo"/><h1 class="text-3xl font-medium hover:opacity-70 transition-opacity duration-150">RedditMinimal</h1></NavLink>
                    </div>
                    <div>
                        <label htmlFor="search">Search</label>
                        <input class="border-2 rounded-4xl"id="search" type="text" placeholder="  ..." />
                    </div>
                    <div>
                        <ul class="flex gap-4">
                            <NavLink to="/about"><li class="hover:opacity-70 transition-opacity duration-150">About</li></NavLink>
                            <NavLink to="/contact"><li class="hover:opacity-70 transition-opacity duration-150">Contact</li></NavLink>
                        </ul>
                    </div>
                </div>
            </nav>


        </header>
    )

}

export default NavBar;