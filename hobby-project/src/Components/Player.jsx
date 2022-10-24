function Player({fullname, team_id, country_id}) {
    return(
        <>
            <p><strong>{`${fullname}`} </strong></p>
            <p>{`${team_id}`} </p>
            <p>{`${country_id}`} </p>

        </>
        
    );
}
export default Player;