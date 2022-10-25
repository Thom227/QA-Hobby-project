import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreatePlayer () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);    
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add more details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3"
                        controlId="addDetails.ControlInput1">
                            <Form.Label>Search Player</Form.Label>
                            <Form.Control                            
                            placeholder="Messi"
                            autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="addDetails.ControlInput2"
                        >
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