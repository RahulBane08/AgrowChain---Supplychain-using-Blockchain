import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { extractForm } from '../../utils/formUtils';
import { AppContext } from '../../App';
const SupplyChain = () => {
    const { batchNo } = useParams();
    const { nextAction, getNextAction, setbatchNo } = useContext(AppContext);
    if (nextAction[batchNo] === 'CUSTOMER') {
        return (
            <>
                <h4 className="text-center my-4 font-weight-bold">Supply Chain:- {batchNo}</h4>
                <h4 className="my-4 text-center">
                    This supply chain is done,{' '}
                    <a href={`https://agro-chain-receipt.netlify.app/${batchNo}`}>click here</a> to view its detail. Or
                    scan the QR code below.
                </h4>
                <Container className="text-center p-5">
                    <img src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${batchNo}`} alt="" />
                </Container>
            </>
        );
    }
    return (
        <div>
            <h4 className="text-center my-4 font-weight-bold">Supply Chain:- {batchNo}</h4>

            <>
                {!nextAction[batchNo] && (
                    <>
                        <Container className="text-center mx-auto">
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setbatchNo(batchNo);
                                    getNextAction(batchNo);
                                }}
                            >
                                CLick
                            </Button>
                            <p className="mt-3">Click to view current entity in this chain</p>
                        </Container>
                    </>
                )}

                {nextAction[batchNo] && (
                    <h1 className="text-center my-4 text-warning">Current entity is {nextAction[batchNo]}</h1>
                )}
                {nextAction[batchNo] && extractForm(nextAction[batchNo])}
            </>
        </div>
    );
};

export default SupplyChain;
