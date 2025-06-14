
import { NavLink } from 'react-router-dom';
import BengalsLogo from '../../assets/img/Bengals_logo.png';
import RedsLogo from '../../assets/img/Reds_logo.png';
import ESPNLogo from '../../assets/img/ESPN_logo.png';
import NBAPlayoffsLogo from '../../assets/img/NBA_playoffs_logo.png';
import NFLDraftLogo from '../../assets/img/NFL_draft_logo.png';
import MLBLogo from '../../assets/img/MLB_logo.png';

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
        <div key={subreddit.id} class="flex hover:opacity-80 transition-opacity duration-150 text-slate-700 bg-gray-200 p-4 rounded-lg shadow-md items-center gap-2 m-3">
            <NavLink to={`/${subreddit.name}`} class=" flex gap-2 items-center"><img class="rounded-full h-8 w-10 border-2 border-neutral-500 bg-gray-50"  src={subreddit.logo} /></NavLink>
            <NavLink to={`/${subreddit.name}`} class=" flex gap-2 items-center"><h3>{subreddit.name}</h3></NavLink>
        </div>

    ))

    return (
        <div class="flex-col gap-4 items-center border-2 border-slate-500 rounded-lg p-10 bg-slate-300 mt-10 ">  
            <div >             
                <h2 class=" justify-self-center text-3xl text-slate-600">SubReddits</h2>
            </div>
            {subRedditList}
        </div>
    )
}
