function Player({fullname, team_id, nationality}) {
    return(
        <>
            <p><strong>{`${fullname}`} </strong></p>
            <p>{`${team_id}`} </p>
            <p>{`${nationality}`} </p>

        </>
        
    );
}
export default Player;