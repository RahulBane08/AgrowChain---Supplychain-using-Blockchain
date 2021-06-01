import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../App';
import axios from 'axios';

export default function SupplychainDetail() {
    const {
        getFarmerData,
        farmerData,
        distributerData,
        getDistributorData,
        retailerData,
        getRetailerData,
        manufacturerData,
        getManufacturerData,
    } = useContext(AppContext);
    console.log(distributerData);
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
        <Container className="w-75">
            <h3 className="mt-4 text-center ">Full overview of the supply chain</h3>
            <Row className="mt-5">
                <Col sm="6" className="border-right border-dark" style={{ fontSize: '20px' }}>
                    <p>
                        <span className="badge badge-light ">Farmer ID </span>
                        {farmerData[batchNo] && <span> - {farmerData[batchNo].farmerID} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Farmer Name </span>
                        {farmerData[batchNo] && <span> - {farmerData[batchNo].farmerName} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Farm Location </span>
                        {farmerData[batchNo] && <span> - {farmerData[batchNo].farmLocation} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Tea Type </span>
                        {farmerData[batchNo] && <span> - {farmerData[batchNo].cropType}</span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Quantity </span>
                        {farmerData[batchNo] && <span> - {farmerData[batchNo].quantity} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Date </span>
                        {farmerData[batchNo] && <span> - {farmerData[batchNo].date} </span>}
                    </p>
                </Col>
                <Col sm="6" className="justify-content-center align-item-center my-auto">
                    <h2 className="text-dark">Farmer Details</h2>
                    {supplyChain && supplyChain.farmerData ? (
                        <Button
                            size="sm"
                            onClick={() => {
                                console.log('sdsd');
                                getFarmerData(batchNo);
                            }}
                        >
                            View Detail
                        </Button>
                    ) : (
                        <p className="text-danger font-weight-bold">No details filled yet</p>
                    )}
                </Col>
            </Row>
            <hr style={{ height: '3px', border: 'none', backgroundColor: '#000' }} />
            <Row className="mt-3">
                <Col sm="6" className="justify-content-center align-item-center my-auto">
                    <h2 className="text-dark">Manufacturer Details</h2>
                    {supplyChain && supplyChain.manufacturerData ? (
                        <Button
                            size="sm"
                            onClick={() => {
                                getManufacturerData(batchNo);
                            }}
                        >
                            View Detail
                        </Button>
                    ) : (
                        <p className="text-danger font-weight-bold">No details filled yet</p>
                    )}
                </Col>
                <Col sm="6" className="border-left border-dark" style={{ fontSize: '20px' }}>
                    <p>
                        <span className="badge badge-light ">Manufacturer ID </span>
                        {manufacturerData[batchNo] && <span> - {manufacturerData[batchNo].manufacturerID} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Manufacturer Name </span>
                        {manufacturerData[batchNo] && <span> - {manufacturerData[batchNo].manufacturerName} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Factory Location </span>
                        {manufacturerData[batchNo] && <span> - {manufacturerData[batchNo].factoryLocation} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Crop Type </span>
                        {manufacturerData[batchNo] && <span> - {manufacturerData[batchNo].cropType} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Quantity </span>
                        {manufacturerData[batchNo] && <span> - {manufacturerData[batchNo].quantity} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Date </span>
                        {manufacturerData[batchNo] && <span> - {manufacturerData[batchNo].date} </span>}
                    </p>
                </Col>
            </Row>
            <hr style={{ height: '3px', border: 'none', backgroundColor: '#000' }} />
            <Row className="mt-3">
                <Col sm="6" className="border-right border-dark" style={{ fontSize: '20px' }}>
                    <p>
                        <span className="badge badge-light ">Distributor ID</span>
                        {distributerData[batchNo] && <span> - {distributerData[batchNo].distributorID} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Distributor Name </span>
                        {distributerData[batchNo] && <span> - {distributerData[batchNo].distributorName} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Crop Type </span>
                        {distributerData[batchNo] && <span> - {distributerData[batchNo].cropType} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Quantity </span>
                        {distributerData[batchNo] && <span> - {distributerData[batchNo].quantity} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Date </span>
                        {distributerData[batchNo] && <span> - {distributerData[batchNo].date} </span>}
                    </p>
                </Col>
                <Col sm="6" className="justify-content-center align-item-center my-auto">
                    <h2 className="text-dark">Distributer Details</h2>
                    {supplyChain && supplyChain.distributerData ? (
                        <Button
                            size="sm"
                            onClick={() => {
                                getDistributorData(batchNo);
                            }}
                        >
                            View Detail
                        </Button>
                    ) : (
                        <p className="text-danger font-weight-bold">No details filled yet</p>
                    )}
                </Col>
            </Row>
            <hr style={{ height: '3px', border: 'none', backgroundColor: '#000' }} />
            <Row className="mt-3">
                <Col sm="6" className="justify-content-center align-item-center my-auto">
                    <h2 className="text-dark">Retailer Details</h2>
                    {supplyChain && supplyChain.retailerData ? (
                        <Button
                            size="sm"
                            onClick={() => {
                                getRetailerData(batchNo);
                            }}
                        >
                            View Detail
                        </Button>
                    ) : (
                        <p className="text-danger font-weight-bold">No details filled yet</p>
                    )}
                </Col>
                <Col sm="6" className="border-left border-dark" style={{ fontSize: '20px' }}>
                    <p>
                        <span className="badge badge-light ">Retailer ID </span>
                        {retailerData[batchNo] && <span> - {retailerData[batchNo].retailerID} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Reatiler Name </span>
                        {retailerData[batchNo] && <span> - {retailerData[batchNo].retailerName} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Store Location </span>
                        {retailerData[batchNo] && <span> - {retailerData[batchNo].storeLocation} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Crop Type </span>
                        {retailerData[batchNo] && <span> - {retailerData[batchNo].cropType} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Quantity </span>
                        {retailerData[batchNo] && <span> - {retailerData[batchNo].quantity} </span>}
                    </p>
                    <p>
                        <span className="badge badge-light ">Date </span>
                        {retailerData[batchNo] && <span> - {retailerData[batchNo].date} </span>}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
