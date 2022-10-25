import {useState} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';

function CreatePlayer () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);    
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Or create one
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
                            value=""
                            placeholder="Brian Brobbey"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3"
                        controlId="addDetails.ControlInputAge">
                            <Form.Label>age</Form.Label>
                            <Form.Control                            
                            placeholder="20"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3"
                        controlId="addDetails.ControlInputCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control                            
                            placeholder="Netherlands"
                            />
                        </Form.Group>

                        <Form.Group
                        className="mb-3"
                        controlId="addDetails.ControlInputTeam">
                            <Form.Label>Team</Form.Label>
                            <Form.Control
                            placeholder="Ajax"
                            />
                        </Form.Group>                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Create</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>        
    );
}
export default CreatePlayer;