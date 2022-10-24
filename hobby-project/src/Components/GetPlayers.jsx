import axios from 'axios';
import { useState } from 'react';
import Player from './Player';


const Players = () => {

    const [playerName, setPlayerName] = useState('');
    const [players, setPlayer] = useState([]);

    const searchPlayer = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://soccer.sportmonks.com/api/v2.0/players/search/${playerName}`)
        console.log('RES: ', res);
        setPlayer(res.data.search);
    }

    return(
        <>        
            <form>
                <label> Search player: </label>
                <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                <button type="submit" onClick={searchPlayer}>Search</button>
            </form>
            
            
            {
                players.map((player) => (
                    <Player
                    key={player.player_id}
                    playerName={player.fullname}
                    team={player.team_id}
                    coutnry={player.country_id}
                    />
                ))
            } 
        </>
    );
}
export default Players;