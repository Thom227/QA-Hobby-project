import {Button, Card} from 'react-bootstrap'

const CreateCard = ({
    name, age, country, team
}) => {    
        return (
            <Card
            style={{
                width: '6rem', height: '6rem',
                fontSize: 11,
                display: "flex",           
                }}>
                <Card.Body>
                    <Card.Text>
                        <strong>{name}</strong><br/>
                        {age}<br/>
                        {country}<br/>
                        {team}
                    </Card.Text>
                    <Button variant="primary">Update</Button>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>            
        )
}
export default CreateCard;