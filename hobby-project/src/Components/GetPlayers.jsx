import {Button, Form, Col} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import APIToken from '../APIToken';
import Player from './Props/Player';


const GetPlayers = () => {    
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
            <Form>
                <Form.Group className="mb-3" controlId="getPlayer">
                    <Col xs={3}>
                        <Form.Control
                        type="searchInput"
                        value={playerName}
                        placeholder="Messi"
                        onChange={(e) => setPlayerName(e.target.value)}
                        />
                        <Button type="Button" onClick={searchPlayer}>Search</Button>
                    </Col>
                </Form.Group>                    
            </Form>            
            {
                players.filter((player, i) => i < 5)
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
export default GetPlayers;