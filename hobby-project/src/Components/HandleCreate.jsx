import {Button, Card} from 'react-bootstrap'
import {useState} from 'react';

const HandleCreate = ({name, age, country, team}) => {

    const [show, setShow] = useState(false);

    const deleteHandler = e => {
        name = ""
        age = ""
        country = ""
        team = ""
        setShow(current => !current);
    };
        return (
            <Card show ={show} style={{width: '9rem', height: '9rem'}}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {age}<br/>
                        {country}<br/>
                        {team}
                    </Card.Text>
                    <Button variant="primary">Update</Button>
                    <Button variant="danger" onClick={deleteHandler}>Delete</Button>
                </Card.Body>
            </Card>
            
            
        )
}
export default HandleCreate;