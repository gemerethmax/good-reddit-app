import { NavLink } from "react-router-dom";
import redditLogo from '../assets/Reddit_logo.png';

const NavBar = () => {

    return(
        <header >
            <nav class="width-full flex justify-between items-center bg-blue-400 p-4">
                <img height="30px" width="30px" src={redditLogo} alt="Reddit Logo"/><h1>RedditMinimal</h1>
                <label htmlFor="search">Search</label>
                <input id="search" type="text" placeholder="Search..." />
                <ul>
                   <NavLink to="/"><li>Home</li></NavLink>
                   <NavLink to="/about"><li>About</li></NavLink>
                   <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
                
            </nav>


        </header>
    )

}

export default NavBar;