

export const SubReddits = () => {

    const subreddits = [
        { name: 'NFL Draft', id: 1},
        { name: 'NBA Playoffs', id: 2},
        { name: 'MLB', id: 3},
        { name: 'Cincinnnati Reds', id: 4},
        { name: 'Cincinnnati Bengals', id: 5},
        { name: 'ESPN', id: 6},
    ]

    const subRedditList = subreddits.map((subreddit) => (
        <article key={subreddit.id}>
            <h3><a>{subreddit.name}</a></h3>
        </article>

    ))

    return (
        <section>
            <h2>SubReddits</h2>
            {subRedditList}
        </section>
    )
}
