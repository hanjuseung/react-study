import FoodCard from '../components/FoodCard';
import { Nav, Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap';
function Home({foods}) {
    return (
        <div>
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {
                        foods.map((foods) => {
                            return (
                                <Col md={4} sm={6}>
                                    <FoodCard foods={foods} />
                                </Col>
                                // <Col md={4} sm={6}>
                                //     <Card style={{ width: '18rem' }}>
                                //         {/* <Card.Img variant="top" src={food1} /> */}
                                //         <Card.Img variant="top" src='/images/food1.jpg' />
                                //         <Card.Body>
                                //             <Card.Title>{item.title}</Card.Title>
                                //             <Card.Text>
                                //                 {item.content}
                                //             </Card.Text>
                                //             <Card.Text>
                                //                 {item.price}
                                //             </Card.Text>
                                //             <Button variant="primary">Go somewhere</Button>
                                //         </Card.Body>
                                //     </Card>
                                // </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </div>
    );

}

export default Home;