import {Card, Button, Col } from 'react-bootstrap';

function FoodCard(props) {
    return (
        <>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src={food1} /> */}
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + props.foods.imgPath}/>
                    <Card.Body>
                        <Card.Title>{props.foods.title}</Card.Title>
                        <Card.Text>
                            {props.foods.content}
                        </Card.Text>
                        <Card.Text>
                            {props.foods.price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </>
    );
}

export default FoodCard;