import { Container, Row, Col, Button } from 'react-bootstrap';
import verifiedStamp from './verified.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Main() {
    const [supplyChain, setSupplyChain] = useState();

    const { batchNo } = useParams();
    useEffect(() => {
        axios.get(`https://agrochain-server.herokuapp.com`).then(res => {
            const data = res.data;
            let obj = {};
            for (let i in data.result) {
                if (data.result[i]['batchNo'] === batchNo) {
                    obj = data.result[i];
                }
            }
            setSupplyChain(obj);
        });
    }, []);
    return (
        <>
            {supplyChain && (
                <Container className="mt-2">
                    <Row sm={6} className="justify-content-center align-item-center my-auto d-none d-md-block">
                        <h2 className="text-dark" style={{ fontSize: '30px' }}>
                            Your Receipt : {batchNo}
                        </h2>
                    </Row>
                    <Row sm={6} className="justify-content-center align-item-center my-auto d-block d-md-none pl-3">
                        <h2 className="text-dark" style={{ fontSize: '12px' }}>
                            Reciept No : <span style={{ fontSize: '10px' }}>{batchNo}</span>
                        </h2>
                    </Row>
                    <hr style={{ height: '2px', border: 'none', backgroundColor: '#000' }} />
                    <Row className="mt-3" style={{ textAlign: 'left' }}>
                        <Col sm={6} className="justify-content-center align-item-center my-auto">
                            <h2 className="text-primary" style={{ fontSize: '20px' }}>
                                Farmer Details
                            </h2>
                        </Col>
                        <img
                            src={verifiedStamp}
                            className="d-none d-md-block"
                            style={{ height: '120px', float: 'right' }}
                        />
                        <Col sm={6} className="" style={{ fontSize: '20px' }}>
                            <p>
                                <span className="badge badge-light ">
                                    Farmer ID : {supplyChain.farmerData.farmerID}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Farmer Name : {supplyChain.farmerData.farmerName}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Farm Location : {supplyChain.farmerData.farmLocation}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Crop Type : {supplyChain.farmerData.cropType}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Quantity : {supplyChain.farmerData.quantity} kgs
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">Date : {supplyChain.farmerData.date}</span>
                            </p>
                        </Col>
                    </Row>
                    <hr style={{ height: '2px', border: 'none', backgroundColor: '#000' }} />
                    <Row className="mt-3" style={{ textAlign: 'left' }}>
                        <Col sm={6} className="justify-content-center align-item-center my-auto">
                            <h2 className="text-primary" style={{ fontSize: '20px' }}>
                                Manufacturer Details
                            </h2>
                        </Col>
                        <img
                            src={verifiedStamp}
                            className="d-none d-md-block"
                            style={{ height: '120px', float: 'right' }}
                        />
                        <Col sm={6} className="" style={{ fontSize: '20px' }}>
                            <p>
                                <span className="badge badge-light ">
                                    Manufacturer Name : {supplyChain.manufacturerData.manufacturerID}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Manufacturer ID : {supplyChain.manufacturerData.manufacturerName}{' '}
                                </span>
                            </p>

                            <p>
                                <span className="badge badge-light ">
                                    Factory Location : {supplyChain.manufacturerData.factoryLocation}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Crop Type : {supplyChain.manufacturerData.cropType}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Quantity : {supplyChain.manufacturerData.quantity} kgs
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">Date : {supplyChain.manufacturerData.date}</span>
                            </p>
                        </Col>
                    </Row>
                    <hr style={{ height: '2px', border: 'none', backgroundColor: '#000' }} />
                    <Row className="mt-3" style={{ textAlign: 'left' }}>
                        <Col sm={6} className="justify-content-center align-item-center my-auto">
                            <h2 className="text-primary" style={{ fontSize: '20px' }}>
                                Distributer Details
                            </h2>
                        </Col>
                        <img
                            src={verifiedStamp}
                            className="d-none d-md-block"
                            style={{ height: '120px', float: 'right' }}
                        />
                        <Col sm={6} className="" style={{ fontSize: '20px' }}>
                            <p>
                                <span className="badge badge-light ">
                                    Distributor ID : {supplyChain.distributerData.distributorID}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Distributor Name : {supplyChain.distributerData.distributorName}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Crop Type : {supplyChain.distributerData.cropType}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Quantity : {supplyChain.distributerData.quantity} kgs
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">Date : {supplyChain.distributerData.date}</span>
                            </p>
                        </Col>
                    </Row>
                    <hr style={{ height: '2px', border: 'none', backgroundColor: '#000' }} />
                    <Row className="mt-3" style={{ textAlign: 'left' }}>
                        <Col sm={6} className="justify-content-center align-item-center my-auto">
                            <h2 className="text-primary" style={{ fontSize: '20px' }}>
                                Retailer Details
                            </h2>
                        </Col>
                        <img
                            src={verifiedStamp}
                            className="d-none d-md-block"
                            style={{ height: '120px', float: 'right' }}
                            alt="img"
                        />
                        <Col sm={6} className="" style={{ fontSize: '20px' }}>
                            <p>
                                <span className="badge badge-light ">
                                    Retailer ID : {supplyChain.retailerData.retailerID}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Reatiler Name : {supplyChain.retailerData.retailerName}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Store Location : {supplyChain.retailerData.storeLocation}{' '}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Crop Type : {supplyChain.retailerData.cropType}{' '}
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">
                                    Quantity : {supplyChain.retailerData.quantity} kgs
                                </span>
                            </p>
                            <p>
                                <span className="badge badge-light ">Date : {supplyChain.retailerData.date}</span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
}
