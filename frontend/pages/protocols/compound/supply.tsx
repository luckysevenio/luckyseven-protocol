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
import { EthSignSignature } from '@gnosis.pm/safe-core-sdk/dist/src/utils/signatures/SafeSignature';
import { useRouter } from 'next/router';
import { COMPOUND_TOKENS } from '../../../utils/constants';
import { formatEther } from 'ethers/lib/utils';
import { rinkeby } from '../../../addresses';
import { ERC20__factory } from '../../../typechain';

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
function getSpender(token: COMPOUND_TOKENS) {
  switch (token) {
    case COMPOUND_TOKENS.DAI:
      return rinkeby.compound.cDAI;
    default:
      throw new Error('Token not recognized');
  }
}

async function approve(
  safeBalance: BigNumber,
  safeAddress: string,
  provider: any,
  token: COMPOUND_TOKENS
) {
  const spender = getSpender(token);
  const res = await fetch('http://localhost:3000/api/transaction/approve', {
    method: 'POST',
    body: JSON.stringify({
      amount: safeBalance,
      owner: safeAddress,
      spender,
      token,
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

async function supply(
  safeBalance: BigNumber,
  safeAddress: string,
  ownerAddress: string,
  provider: any,
  token: COMPOUND_TOKENS
) {
  const res = await fetch(
    'http://localhost:3000/api/protocol/compound/supply',
    {
      method: 'POST',
      body: JSON.stringify({
        safeBalance,
        safeAddress,
        ownerAddress,
        token,
      }),
    }
  );
  const response = await res.json();
  const { signatures, tx } = response;
  // @ts-ignore
  const signedTx = new EthSignSignature(
    Object.values(signatures)[0].signer,
    Object.values(signatures)[0].data
  );
  const safeSDK = await getSafeSdk(safeAddress, provider);
  const safeTx = await safeSDK.createTransaction(tx);
  await safeTx.addSignature(signedTx);
  const executeTransaction = await safeSDK.executeTransaction(safeTx);
  console.log(executeTransaction);
}

function Supply() {
  const router = useRouter();
  const { token } = router.query;
  const web3 = useAppSelector((state) => state.web3);
  const safe = useAppSelector((state) => state.safe);
  const { account, provider } = web3;
  const { address: safeAddress } = safe;

  const [balance, setBalance] = useState(BigNumber.from('0'));
  const [allowance, setAllowance] = useState(BigNumber.from('0'));

  useEffect(() => {
    async function getSafe() {
      if (token === COMPOUND_TOKENS.DAI) {
        // @ts-ignore
        const address = rinkeby.erc20.DAI;
        const cDAI = rinkeby.compound.cDAI;
        // @ts-ignore
        const token = await ERC20__factory.connect(address, provider);
        const bal = await token.balanceOf(safeAddress);
        setBalance(bal);
        const allow = await token.allowance(safeAddress, cDAI);
        setAllowance(allow);
      } else {
        // @ts-ignore
        const bal = await provider.getBalance(safeAddress);
        setBalance(bal);
      }
    }
    if (account !== '') {
      getSafe();
    }
  }, []);

  return (
    <div className="App">
      <Container>
        <CardGroup>
          <Card className="text-center">
            <Card.Header>Supply {token} liquidity to Compound</Card.Header>
            <Card.Body>
              <Card.Title>Safe address</Card.Title>
              <Card.Text>{safeAddress}</Card.Text>
              <Card.Title>Safe {token} balance</Card.Title>
              <Card.Text>
                {formatEther(balance)} {token}
              </Card.Text>
              {token !== COMPOUND_TOKENS.ETH && (
                <>
                  <Card.Title>Safe {token} allowance</Card.Title>
                  <Card.Text>
                    {formatEther(allowance)} {token}
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </CardGroup>
        <Row>
          {token !== COMPOUND_TOKENS.ETH && (
            <Col>
              <Card className="text-center">
                <Card.Header>Approve</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Approve {formatEther(balance)} {token} to Compound
                  </Card.Text>
                  <Container>
                    <Row>
                      <ButtonGroup aria-label="Basic example">
                        <Button
                          variant="primary"
                          onClick={() =>
                            approve(balance, safeAddress, provider, token)
                          }
                        >
                          Approve
                        </Button>
                      </ButtonGroup>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          )}
          <Col>
            <Card className="text-center">
              <Card.Header>Supply</Card.Header>
              <Card.Body>
                <Card.Text>
                  Supply {formatEther(balance)} {token} to Compound
                </Card.Text>
                <Container>
                  <Row>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="primary"
                        onClick={() =>
                          supply(balance, safeAddress, account, provider, token)
                        }
                      >
                        Supply
                      </Button>
                    </ButtonGroup>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Supply;
