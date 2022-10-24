// import React from 'react';
import { useState } from 'react';

const Pitch = () => {
    const [addPlayer, setAddPlayer] = useState(false);
    const [addDetails, setAddDetails] = useState(false);

    const handleClickAddPlayer = e => {
        setAddPlayer(current => !current);
    };

    const handleClickAddDetails = e => {
        setAddDetails(current => !current);
    }

    return(
        <div style={{
            backgroundImage: `url("https://conceptdraw.com/a1970c3/p1/preview/640/pict--soccer-field-template-end-zone-view-association-football-pitch---template.png--diagram-flowchart-example.png")`,
            // width: '351 px', height: '270.38 px', margin: '0 px'
            }}>
            <div>
                <button type="button" onClick={handleClickAddPlayer}> LW </button>
                <button type="button" onClick={handleClickAddPlayer}> ST </button>
                <button type="button" onClick={handleClickAddPlayer}> RW </button>
            </div>

            <br/>
            
            <div>
                <button type="button" onClick={handleClickAddPlayer}> CM </button>
                <button type="button" onClick={handleClickAddPlayer}> CAM </button>
                <button type="button" onClick={handleClickAddPlayer}> CM </button>
            </div>
            <br/>

            <div>
                <button type="button" onClick={handleClickAddPlayer}> LB </button>
                <button type="button" onClick={handleClickAddPlayer}> CB </button>
                <button type="button" onClick={handleClickAddPlayer}> CB </button>
                <button type="button" onClick={handleClickAddPlayer}> RB </button>
            </div>
            <br/>

            <div>
            <button type="button" onClick={handleClickAddPlayer}> GK </button>

            </div>
        
            {addPlayer && (
            <form>
                <label>Search</label>
                <input></input>
                <br/> Or create<br/>
                <label>Name</label>
                <input></input>
                <br/>
                <button type="button" onClick={handleClickAddDetails} >Add more details</button>
            </form>
            )}

            {addDetails &&(
                <form>
                    <label>Country</label>
                    <input></input>
                    <br/>
                    <label>Team</label>
                    <input></input>
                    <br/>
                    <label>Age</label>
                    <input></input>
                    <br/>
                    <label>Preferred foot:</label>
                    <input></input>
                </form>
            )}

        </div>
        
        
        

    );
}
export default Pitch;