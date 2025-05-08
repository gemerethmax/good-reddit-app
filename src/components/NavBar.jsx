

const NavBar = () => {

    return(
        <header>
            <h1>RedditMinimal</h1>
            <nav>
                <ul>
                    <li>Home</li>
                </ul>
                <label htmlFor="search">Search</label>
                <input id="search" type="text" placeholder="Search..." />
            </nav>


        </header>
    )

}

export default NavBar;