import React, { useState, useContext } from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import { AppContext } from '../../App';
import { useHistory } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default function RegisterRetailer(props) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        retailerName: '',
        retailerID: '',
        storeLocation: '',
        cropType: '',
        quantity: '',
    });
    const [startDate, setStartDate] = useState(new Date());
    const { setRetailerData, batchNo, getNextAction } = useContext(AppContext);
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
                dataType: 'retailerData',
            })
            .then(res => {
                console.log('Saved to DB', res.data);
            })
            .catch(err => console.log(err));
        setRetailerData(
            batchNo,
            formData.retailerID,
            formData.retailerName,
            formData.storeLocation,
            formData.cropType,
            formData.quantity,
            selectedDateStr
        );
        getNextAction(batchNo);
    };
    return (
        <Container className="mx-auto">
            <h2 className="text-center my-4">Give details for retailer</h2>
            <Form onSubmit={submitForm} className="mx-auto mt-3">
                <Form.Group>
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Retailer ID
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Retailer ID"
                                value={formData.retailerID}
                                name="retailerID"
                                onChange={handlechange}
                                // className="w-50"
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
                    <br />
                    <Form.Row>
                        <Form.Label className="font-weight-bold" column lg={2}>
                            Store Location
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Store Location"
                                value={formData.storeLocation}
                                name="storeLocation"
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
