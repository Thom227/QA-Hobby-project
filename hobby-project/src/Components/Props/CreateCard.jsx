import {Button, Card} from 'react-bootstrap'

const CreateCard = ({
    _id, position, name, age, country, team, handleDelete, handleUpdate
}) => {    
        return (
            <Card>            
                <Card.Body>
                    <Card.Text>
                        <u>{position}</u><br/>
                        <b>{name}</b><br/>
                        {age}<br/>
                        {country}<br/>
                        {team}
                    </Card.Text>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>            
        )
}
export default CreateCard;