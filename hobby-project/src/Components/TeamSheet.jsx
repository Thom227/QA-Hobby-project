import axios from 'axios';
import {useEffect, useState} from 'react';
import {Container, Col} from 'react-bootstrap';
import CreateCard from './Props/CreateCard';

const TeamSheet = () => {
    const [players, setPlayers] = useState([]);

    const getPlayer = async () => {
        const res = await axios.get('http://localhost:4494/football/getAll');
        setPlayers(res.data);
    };
    useEffect(() => {getPlayer()}, []);

    const removePlayer = async (id) => {
        await axios.delete('http://localhost:4494/football/delete/' + id);
        getPlayer();
    };

    const updatePlayer = async (id) => {
        await axios.patch('http://localhost:4494/football/update/' + id);
        
    };

    return(
        <Container>
            <div className="row row-cols-3 g-4">                    
                {
                    players.map((player) => (
                        <Col>
                            <CreateCard
                                key={player._id}
                                name={player.name}
                                position={player.position}
                                age={player.age}
                                country={player.country}
                                team={player.team}
                                handleDelete={() => removePlayer(player._id)}
                                handleUpdate={() => updatePlayer(player._id)}
                            />
                        </Col>
                    ))
                }
            </div>
        </Container>
    );
}
export default TeamSheet;