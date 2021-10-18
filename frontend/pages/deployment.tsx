import React, { useState } from 'react';
import { ActionTypes, useAppDispatch, useAppSelector } from '../store';
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  InputGroup,
  ListGroup,
  Toast,
} from 'react-bootstrap';
import { ethers } from 'ethers';
import Safe, {
  EthersAdapter,
  SafeFactory,
  SafeAccountConfig,
} from '@gnosis.pm/safe-core-sdk';
import { AddressZero } from '@ethersproject/constants';
import { useRouter } from 'next/router';

function Deployment() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const web3 = useAppSelector((state) => state.web3);
  const safe = useAppSelector((state) => state.safe);
  const { account, provider, chainId } = web3;
  const { owners, threshold, xmWallet, address: safeAddress } = safe;

  async function deploySafe() {
    // @ts-ignore
    const owner1 = provider.getSigner(0);
    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signer: owner1,
    });
    const safeFactory = await SafeFactory.create({
      ethAdapter: ethAdapterOwner1,
      contractNetworks: {
        [1337]: {
          multiSendAddress: '0x435383c2336a298454D68E02620Aeec5a0407335',
          safeMasterCopyAddress: '0xAD11966CA009A48268a287118A033a29e28d922a',
          safeProxyFactoryAddress: '0xD9800aB99cf7914F84468EBA9a54270CB1E6d205',
        },
      },
    });
    const safeOwners = [...owners, xmWallet];
    const safeAccountConfig: SafeAccountConfig = {
      owners: safeOwners,
      threshold,
    };

    const safeSdk: Safe = await safeFactory.deploySafe(safeAccountConfig);
    setShowA(true);
    await dispatch({
      type: ActionTypes.SET_SAFE_ADDRESS,
      payload: safeSdk.getAddress(),
    });
  }
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const DeployedSafeToast = () => (
    <Toast show={showA} onClose={toggleShowA}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Congratulations!</strong>
      </Toast.Header>
      <Toast.Body>Safe was deployed with address {safeAddress}</Toast.Body>
    </Toast>
  );

  return (
    <div className="App">
      <DeployedSafeToast />
      <Container>
        <Col>
          <CardGroup>
            <Card className="text-center">
              <Card.Header>Review the Safe Configuration</Card.Header>
              <Card.Body>
                <Card.Title>Owners</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>XMargin Wallet: {xmWallet}</ListGroup.Item>
                    {owners.map((owner) => (
                      <ListGroup.Item>{owner}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Text>
                Threshold: <b />
                {threshold}
              </Card.Body>
              {safeAddress !== AddressZero ? (
                <Button onClick={() => router.push('/safe')} variant="primary">
                  Use your Safe
                </Button>
              ) : (
                <Button onClick={deploySafe} variant="primary">
                  Deploy safe
                </Button>
              )}
            </Card>
          </CardGroup>
        </Col>
      </Container>
    </div>
  );
}

export default Deployment;
