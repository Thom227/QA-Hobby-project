import axios from 'axios';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function Position({ position }) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [team, setTeam] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleClose();
        const res = await axios.post('http://localhost:4494/football/createPlayer', {
            name, age, country, team, position
        });
        console.log(`Player: ${name} succesfully created`, res.data);;
    }

    // const handleHover = async () => {
    //     const player = await axios.get("http://localhost:4494/football/get/" + position);
    //     console.log(position + ":", player);
    // }
    // onMouseOver={handleHover}

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                {position}
            </Button>

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

                        <Form.Group className="mb-3"
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
                    <Button variant="primary" onClick={handleSubmit}>Create</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Position;