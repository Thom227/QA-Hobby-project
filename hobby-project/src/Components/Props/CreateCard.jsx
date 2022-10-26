import {Button, Card} from 'react-bootstrap'

const CreateCard = ({
    name, age, country, team
}) => {    
        return (
            <Card>            
                <Card.Body>
                    <Card.Text>
                        <strong>{name}</strong><br/>
                        {age}<br/>
                        {country}<br/>
                        {team}
                    </Card.Text>
                    <Button variant="primary" size="sm">Update</Button>
                    <Button variant="danger" size="sm">Delete</Button>
                </Card.Body>
            </Card>            
        )
}
export default CreateCard;