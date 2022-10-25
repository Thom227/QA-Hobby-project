import {useState} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import HandleCreate from '../HandleCreate';

function ST () {
    const [show, setShow] = useState(false);
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [country, setCountry] = useState()
    const [team, setTeam] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCreate = () => {<HandleCreate/>}

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3"
                        controlId="addDetails.ControlInputName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Brian Brobbey"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3"
                        controlId="addDetails.ControlInputAge">
                            <Form.Label>age</Form.Label>
                            <Form.Control
                            value={age} onChange={(e) => setAge(e.target.value)}
                            placeholder="20"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3"
                        controlId="addDetails.ControlInputCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control 
                            value={country} onChange={(e) => setCountry(e.target.value)}
                            placeholder="Netherlands"
                            />
                        </Form.Group>

                        <Form.Group
                        className="mb-3"
                        controlId="addDetails.ControlInputTeam">
                            <Form.Label>Team</Form.Label>
                            <Form.Control
                            value={team} onChange={(e) => setTeam(e.target.value)}
                            placeholder="Ajax"
                            />
                        </Form.Group>                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCreate && handleClose}>Create</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <HandleCreate
            name={name}
            age={age}
            country={country}
            team={team}
            />

            <Button variant="outline-success" onClick={handleShow}>
                ST
            </Button>
        </>        
    );
}
export default ST;