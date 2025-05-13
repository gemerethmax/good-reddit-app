import React from 'react';
import { NavLink } from 'react-router-dom';
import BengalsLogo from '../../assets/Bengals_logo.png';
import RedsLogo from '../../assets/Reds_logo.png';
import ESPNLogo from '../../assets/ESPN_logo.png';
import NBAPlayoffsLogo from '../../assets/NBA_playoffs_logo.png';
import NFLDraftLogo from '../../assets/NFL_draft_logo.png';
import MLBLogo from '../../assets/MLB_logo.png';

export const SubReddits = () => {

    const subreddits = [
        { name: 'NFL Draft', id: 1, logo: NFLDraftLogo},
        { name: 'NBA Playoffs', id: 2, logo: NBAPlayoffsLogo},
        { name: 'MLB', id: 3, logo: MLBLogo},
        { name: 'Cincinnnati Reds', id: 4, logo: RedsLogo},
        { name: 'Cincinnnati Bengals', id: 5, logo: BengalsLogo},
        { name: 'ESPN', id: 6, logo: ESPNLogo},
    ]

    const subRedditList = subreddits.map((subreddit) => (
        <article key={subreddit.id}>
           <img class="rounded-full" height="35px" width="35px" src={subreddit.logo} /><h3><NavLink to={`/${subreddit.name}`}>{subreddit.name}</NavLink></h3>
        </article>

    ))

    return (
        <section>
            <h2>SubReddits</h2>
            {subRedditList}
        </section>
    )
}
