import axios from 'axios';
import {useEffect, useState} from 'react';

const GetAll = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayer = async () => {
            const res = await axios.get('http://localhost:4494/football/getAll');
            setPlayers(res.data);
        };
        getPlayer();
    });
    return(
        <>
            {players.map(({name, age, country, team}) => (
                <>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{country}</p>
                    <p>{team}</p>
                </>
            ))}
        </>
    );
}
export default GetAll;