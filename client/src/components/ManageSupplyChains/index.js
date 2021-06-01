import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import register from '../../images/register.jpg';
import { Link } from 'react-router-dom';
import edit from '../../images/edit.jpg';
export default function index() {
    return (
        <Container className="mx-auto  manageSupplyChains">
            <Row className="justify-content-md-around">
                <Col lg="5">
                    <Card border="primary">
                        <Card.Img variant="top" src={register} />
                        <Card.Body>
                            <Card.Title>Register</Card.Title>
                            <Card.Text>
                                Click below to register a new supply-chain
                            </Card.Text>
                            <Button variant="primary">
                                <Link
                                    to="/addSupplyChain"
                                    className="text-white"
                                >
                                    Register Supply-Chain
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="5">
                    <Card border="warning">
                        <Card.Img variant="top" src={edit} />
                        <Card.Body>
                            <Card.Title>Edit</Card.Title>
                            <Card.Text>
                                Click below to add details for existing
                                supply-chain
                            </Card.Text>
                            <Button variant="primary">
                                <Link
                                    to="/editSupplyChain"
                                    className="text-white"
                                >
                                    Edit Supply-Chains
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
