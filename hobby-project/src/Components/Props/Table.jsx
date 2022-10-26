import {Table} from 'react-bootstrap';

const PlayerTable = (name) => {
    return(
        <>
            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Attackers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> {`LW ${name}`} </tr>
                    <tr> {`ST ${name}`} </tr>
                    <tr> {`RW ${name}`} </tr>
                </tbody>
            </Table>

            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Midfielders</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> {`CM ${name}`} </tr>
                    <tr> {`CAM ${name}`} </tr>
                    <tr> {`CM ${name}`} </tr>
                </tbody>
            </Table>

            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Defenders</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> {`LB ${name}`} </tr>
                    <tr> {`CB ${name}`} </tr>
                    <tr> {`CB ${name}`} </tr>
                    <tr> {`RB ${name}`} </tr>                    
                </tbody>
            </Table>

            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Goalkeeper</th>
                    </tr>
                </thead>
                <tr> {`${name}`} </tr>

            </Table>
        </>
    );
}
export default PlayerTable;