import React, { useState, useContext } from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import { AppContext } from '../../App';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router';
import axios from 'axios';
import moment from 'moment';

export default function RegisterFarmer(props) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        farmerName: '',
        farmerID: '',
        farmLocation: '',
        cropType: '',
        quantity: '',
        date: new Date(),
    });
    const [startDate, setStartDate] = useState(new Date());
    const { setFarmerData, batchNo, getNextAction } = useContext(AppContext);
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
                dataType: 'farmerData',
            })
            .then(res => {
                console.log('Saved to DB', res.data);
            })
            .catch(err => console.log(err));
        console.log('start date', selectedDateStr);
        console.log('start date', typeof selectedDateStr);

        setFarmerData(
            batchNo,
            formData.farmerID,
            formData.farmerName,
            formData.farmLocation,
            formData.cropType,
            formData.quantity,
            selectedDateStr
        );
        getNextAction(batchNo);
    };
    return (
        <Container className="mx-auto">
            <h3 className="text-center my-4">Give details for farmer</h3>
            <Form onSubmit={submitForm} className="mx-auto mt-3">
                <Form.Group>
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Farmer ID
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Farmer ID"
                                defaultValue={formData.farmerID}
                                name="farmerID"
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
                                defaultValue={formData.farmerName}
                                name="farmerName"
                                onChange={handlechange}
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Farmer Location
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Farmer Location"
                                defaultValue={formData.farmLocation}
                                name="farmLocation"
                                onChange={handlechange}
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
                                defaultValue={formData.cropType}
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
                                defaultValue={formData.quantity}
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
