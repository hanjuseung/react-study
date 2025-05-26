import { Card, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function FoodCard(props) {
    let navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={food1} /> */}
            <Card.Img variant="top" src={process.env.PUBLIC_URL + props.foods.imgPath} />
            <Card.Body>
                <Card.Title>{props.foods.title}</Card.Title>
                <Card.Text>
                    {props.foods.content}
                </Card.Text>
                <Card.Text>
                    {props.foods.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                    navigate("/detail/"+ props.foods.id);
                }}>상세보기</Button>
            </Card.Body>
        </Card>
    );
}

export default FoodCard;