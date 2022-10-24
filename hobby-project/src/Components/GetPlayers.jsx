import axios from 'axios';
import { useState } from 'react';
import APIToken from '../APIToken';
import Player from './Player';


const Players = () => {    
    const [playerName, setPlayerName] = useState('');
    const [players, setPlayer] = useState([]);

    const searchPlayer = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://soccer.sportmonks.com/api/v2.0/players/search/${playerName}?api_token=${APIToken}`);
        console.log('RES: ', res);
        setPlayer(res.data.data);
    }
    return(
        <>        
            <form>
                <label> Search player: </label>
                <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                <button type="button" onClick={searchPlayer}>Search</button>
            </form>            
            
            {
                players.filter((player,i) => i < 5)
                .map((player) => (
                    <Player
                    key={player.player_id}
                    fullname={player.fullname}
                    team_id={player.team_id}
                    nationality={player.nationality}
                    />
                ))
            } 
        </>
    );
}
export default Players;