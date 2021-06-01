import React, { useState, useContext } from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import { AppContext } from '../../App';
import { useHistory } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default function RegisterManufac(props) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        manufacturerName: '',
        manufacturerID: '',
        factoryLocation: '',
        cropType: '',
        quantity: '',
    });
    const [startDate, setStartDate] = useState(new Date());
    const { setManufacturerData, batchNo, getNextAction } = useContext(AppContext);
    const handlechange = event => {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        setFormData({ ...formData, [fieldName]: fieldVal });
    };
    const submitForm = event => {
        var selectedDateStr = moment(startDate).format('DD.MM.YYYY');
        let newFormData = { ...formData, date: selectedDateStr };
        event.preventDefault();
        axios
            .post(`https://agrochain-server.herokuapp.com/addData`, {
                batchNo,
                data: newFormData,
                dataType: 'manufacturerData',
            })
            .then(res => {
                console.log('Saved to DB', res.data);
            })
            .catch(err => console.log(err));
        setManufacturerData(
            batchNo,
            formData.manufacturerID,
            formData.manufacturerName,
            formData.factoryLocation,
            formData.cropType,
            formData.quantity,
            selectedDateStr
        );
        getNextAction(batchNo);
    };
    return (
        <Container className="mx-auto">
            <h2 className="text-center my-4">Give details for Manufacturer</h2>
            <Form onSubmit={submitForm} className="mx-auto mt-3">
                <Form.Group>
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Manufacturer ID
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Manufacturer ID"
                                value={formData.manufacturerID}
                                name="manufacturerID"
                                onChange={handlechange}
                                // className="w-50"
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
                                // className="w-50"
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Factory Location
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Farmer Location"
                                value={formData.factoryLocation}
                                name="factoryLocation"
                                onChange={handlechange}
                                // className="w-50"
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Crop Type
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Crop Type"
                                value={formData.cropType}
                                name="cropType"
                                onChange={handlechange}
                                // className="w-50"
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Quantity
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Quantity"
                                value={formData.quantity}
                                name="quantity"
                                onChange={handlechange}
                                // className="w-50"
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Date
                        </Form.Label>
                        <Col>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        </Col>
                    </Form.Row>
                    <br />
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
