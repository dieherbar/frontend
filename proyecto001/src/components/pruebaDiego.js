import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import styles from "@/styles/Home.module.css";

export default function PruebaDiego(props) {
    return (
        <>
            {/* <h1>{props.title}</h1>
        <span>{props.text}</span> */}
            <Card>
                <Card.Img src='/home-background-ar.png' />
                <Card.ImgOverlay>
                    <Container >
                        <Row>
                            <Col>
                                <div className={styles.banner}>
                                    <Card.Title className='text-center text-light fs-1 '>{props.title}</Card.Title>
                                    <Card.Text className='text-center text-light fs-5 '>
                                        {props.text}
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-9'>
                                <Form.Label className='text-center text-light fs-5 fw-bold' htmlFor="localizacion">Veamos que tenes cerca</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="localizacion"
                                    aria-describedby="direccion-pedido"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.ImgOverlay>
            </Card>

        </>
    );
}
