import React, { useState, useContext } from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import { AppContext } from '../../App';

export default function ChainRegisterForm() {
    const { setSupplyChainDetails } = useContext(AppContext);
    const [formData, setformData] = useState({
        registrationNo: '',
        farmerName: '',
        manufacturerName: '',
        distributorName: '',
        retailerName: '',
    });

    const handlechange = event => {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        setformData(prevformData => ({
            ...prevformData,
            [fieldName]: fieldVal,
        }));
    };
    const submitForm = event => {
        event.preventDefault();
        setSupplyChainDetails(
            formData.registrationNo,
            formData.farmerName,
            formData.manufacturerName,
            formData.distributorName,
            formData.retailerName
        );
    };

    return (
        <Container className="mx-auto">
            <h2 className="text-center my-4">Register Supply Chain</h2>
            <Form onSubmit={submitForm} className="mx-auto mt-3">
                <Form.Group>
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Registration No
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Registration No"
                                value={formData.registrationNo}
                                name="registrationNo"
                                onChange={handlechange}
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Farmer Name
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Farmer Name"
                                value={formData.farmerName}
                                name="farmerName"
                                onChange={handlechange}
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Manufacturer Name
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Manufacturer Name"
                                value={formData.manufacturerName}
                                name="manufacturerName"
                                onChange={handlechange}
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Distributer Name
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Distributer Name"
                                value={formData.distributorName}
                                name="distributorName"
                                onChange={handlechange}
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Retailer Name
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Retailer Name"
                                value={formData.retailerName}
                                name="retailerName"
                                onChange={handlechange}
                                // className="w-50"
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Container className="text-center py-4 w-25">
                    <Button variant="primary" type="submit" block>
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}
