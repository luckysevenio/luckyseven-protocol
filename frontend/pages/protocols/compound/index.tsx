import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store';
import {
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import { BigNumber, ethers } from 'ethers';
import Safe, { EthersAdapter } from '@gnosis.pm/safe-core-sdk';
import { AddressZero } from '@ethersproject/constants';
import { EthSignSignature } from '@gnosis.pm/safe-core-sdk/dist/src/utils/signatures/SafeSignature';
import { useRouter } from 'next/router';
import { COMPOUND_TOKENS } from '../../../utils/constants';

async function getSafeSdk(safeAddress: string, provider: any): Promise<Safe> {
  // @ts-ignore
  const owner1 = provider.getSigner(0);
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signer: owner1,
  });
  return await Safe.create({
    ethAdapter: ethAdapterOwner1,
    safeAddress,
    contractNetworks: {
      [1337]: {
        multiSendAddress: '0x435383c2336a298454D68E02620Aeec5a0407335',
        safeMasterCopyAddress: '0xAD11966CA009A48268a287118A033a29e28d922a',
        safeProxyFactoryAddress: '0xD9800aB99cf7914F84468EBA9a54270CB1E6d205',
      },
    },
  });
}

async function withdrawSafeBalance(
  safeBalance: BigNumber,
  safeAddress: string,
  ownerAddress: string,
  provider: any
) {
  const res = await fetch('http://localhost:3000/api/transaction/ethereum', {
    method: 'POST',
    body: JSON.stringify({
      safeBalance,
      safeAddress,
      ownerAddress,
    }),
  });
  const response = await res.json();
  const { signatures, tx } = response;
  // @ts-ignore
  const signedTx = new EthSignSignature(
    Object.values(signatures)[0].signer,
    Object.values(signatures)[0].data
  );
  const safeSDK = await getSafeSdk(safeAddress, provider);
  const safeTx = await safeSDK.createTransaction(tx);
  // await safeTx.addSignature(Object.values(signatures)[0] as SafeSignature);
  await safeTx.addSignature(signedTx);
  const executeTransaction = await safeSDK.executeTransaction(safeTx);
  console.log(executeTransaction);
}

function SafeManagement() {
  const router = useRouter();

  const web3 = useAppSelector((state) => state.web3);
  const safe = useAppSelector((state) => state.safe);
  const [safeOwners, setSafeOwners] = useState([AddressZero]);
  const [safeBalance, setSafeBalance] = useState(BigNumber.from('0'));
  const { account, provider } = web3;
  const { address: safeAddress } = safe;

  useEffect(() => {
    async function getSafe() {
      const safeSdk = await getSafeSdk(safeAddress, provider);
    }
    if (account !== '') {
      getSafe();
    }
  }, [account]);

  return (
    <div className="App">
      <Container>
        <CardGroup>
          <Card className="text-center">
            <Card.Header>Compound Protocol</Card.Header>
            <Card.Body>
              <Card.Title>Safe Address</Card.Title>
              <Card.Text>{safeAddress}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>Supply</Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="primary"
                        onClick={() =>
                          router.push({
                            pathname: router.route + '/supply',
                            query: { token: COMPOUND_TOKENS.ETH },
                          })
                        }
                      >
                        Ether
                      </Button>
                    </ButtonGroup>
                  </Row>
                  <Row>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="primary"
                        onClick={() =>
                          router.push({
                            pathname: router.route + '/supply',
                            query: { token: COMPOUND_TOKENS.DAI },
                          })
                        }
                      >
                        DAI
                      </Button>
                    </ButtonGroup>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Header>Withdraw</Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="primary"
                        onClick={() => router.push('/protocols/compound')}
                      >
                        Ether
                      </Button>
                    </ButtonGroup>
                  </Row>
                  <Row>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="primary"
                        onClick={() => router.push('/protocols/compound')}
                      >
                        DAI
                      </Button>
                    </ButtonGroup>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Header>Borrow</Card.Header>
              <Card.Body>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="primary"
                    onClick={() => router.push('/protocols/compound')}
                  >
                    Compound
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SafeManagement;
