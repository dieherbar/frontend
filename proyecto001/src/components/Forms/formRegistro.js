import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function formRegistro(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col>

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Algo acerca de tu negocio</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}