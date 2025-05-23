import './FoodMarket.css';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';   
// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap';
import banner_bg from '../images/banner_bg.jpg';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';

function FoodMarket() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FoodDetail</Nav.Link>
                        <Nav.Link href="#pricing">Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
                이미지 사용
                1) css 처리 : 이미지 경로
                2) React Component js 처리 : import 한 이후에 사용
                3) public 폴더에 이미지 저장 후, 서버 경로로 접근해서 사용
                    src='/images/food1.jpg'

                    *권장 방식
                    src={process.env.PUBLIC_URL + '/imges/food2.jpg'}

                    *기본 서비스 경로 루트 경로 (/)
                    서버주소:포트번호/

                    package.json > hompage 필드 설정
                    "hompage":"/foodmarket"
             */}
            {/* <img src={banner_bg}/> */}
            {/* <div className='main-bg' style={{backgroundImage: 'url(' + banner_bg +')'}}></div> */}
            <div className='main-bg'></div>

            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src={food1} /> */}
                            <Card.Img variant="top" src='/images/food1.jpg' />
                            <Card.Body>
                                <Card.Title>초코케이크</Card.Title>
                                <Card.Text>
                                    꾸덕하고 달달함
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/food2.jpg'} />
                            <Card.Body>
                                <Card.Title>감자튀김</Card.Title>
                                <Card.Text>
                                    짭짭하고 고소함
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>햄버거</Card.Title>
                                <Card.Text>
                                    맘스터치 화이트갈릭버거
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>




        </div>

    );
}

export default FoodMarket;