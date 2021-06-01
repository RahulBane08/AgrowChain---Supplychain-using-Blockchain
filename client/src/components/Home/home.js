import React from 'react';
import { Container } from 'react-bootstrap';
import homeImg from '../../images/pnghut_logistics-supply-chain-management-business-world-logistic.png';
export default function Home() {
    return (
        <Container fluid className="home pt-5 text-center">
            <h1 className="text-center my-5">Welcome to Agrow-Chain</h1>
            <p className="text-center w-75 mx-auto ">
                The agriculture supply chain brings collectively farmers, retailers, shopkeepers, warehouses and
                factories all below one umbrella. The concept at the back of this venture is to cope with the above
                troubles through tracing the agriculture chain and the usage of a Distributed Ledger Technology,
                Blockchain.
            </p>
            <img src={homeImg} alt="" height={300} />
        </Container>
    );
}
