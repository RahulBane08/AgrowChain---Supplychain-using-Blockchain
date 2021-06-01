import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { AppContext } from '../../App';
import Modal from 'react-modal';
import Qrcode from '../modal/qrcode';

export default function SupplyChainList(props) {
    const { setbatchNo, openModal, closeModal } = useContext(AppContext);

    const [supplyChains, setSupplyChain] = useState([]);
    useEffect(() => {
        axios.get(`https://agrochain-server.herokuapp.com`).then(res => {
            const data = res.data;
            setSupplyChain(data.result);
        });
    }, []);
    return (
        <div className="supplyChainList">
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Qrcode />
            <h2 className="text-center mt-4">Supply Chain List</h2>
            {supplyChains.length === 0 && <h3 className="text-center mt-5 text-danger">No supply chains yet!</h3>}
            <ol className="my-4 ">
                {supplyChains.map(supplyChain => (
                    <li key={supplyChain.batchNo}>
                        <p>
                            <Link
                                className="nav-link d-inline text-dark font-weight-bold"
                                to={`supplychain/${supplyChain.batchNo}`}
                            >
                                {supplyChain.batchNo}
                            </Link>
                            {supplyChain.completed && (
                                <Button
                                    onClick={() => {
                                        openModal();
                                        setbatchNo(supplyChain.batchNo);
                                    }}
                                    size="sm"
                                >
                                    QR code
                                </Button>
                            )}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
