import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store';
import {
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Col,
  Container,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { BigNumber, ethers } from 'ethers';
import Safe, { EthersAdapter } from '@gnosis.pm/safe-core-sdk';
import { AddressZero } from '@ethersproject/constants';
import { formatEther } from 'ethers/lib/utils';
import { EthSignSignature } from '@gnosis.pm/safe-core-sdk/dist/src/utils/signatures/SafeSignature';
import { useRouter } from 'next/router';
import useWalletConnect from '../hooks/useWalletConnect';
import { TextField } from '@material-ui/core';

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
  const res = await fetch(
    'http://localhost:3000/api/transaction/withdrawal/ethereum',
    {
      method: 'POST',
      body: JSON.stringify({
        safeBalance,
        safeAddress,
        ownerAddress,
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
  // await safeTx.addSignature(Object.values(signatures)[0] as SafeSignature);
  await safeTx.addSignature(signedTx);
  const executeTransaction = await safeSDK.executeTransaction(safeTx);
  console.log(executeTransaction);
}

function SafeManagement() {
  const web3 = useAppSelector((state) => state.web3);
  const safe = useAppSelector((state) => state.safe);
  const [safeOwners, setSafeOwners] = useState([AddressZero]);
  const [safeBalance, setSafeBalance] = useState(BigNumber.from('0'));
  const { wcClientData, wcConnect, wcDisconnect } = useWalletConnect();
  const [inputValue, setInputValue] = useState('');
  const [invalidQRCode, setInvalidQRCode] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { account, provider } = web3;
  const { address: safeAddress } = safe;

  const onPaste = React.useCallback(
    (event: React.ClipboardEvent) => {
      // wcDisconnect();
      const connectWithUri = (data: string) => {
        if (data.startsWith('wc:')) {
          setIsConnecting(true);
          wcConnect(data);
        }
      };

      console.log(event);
      setInvalidQRCode(false);
      setInputValue('');
      console.log(wcClientData);
      // if (wcClientData) {
      //   return;
      // }

      const items = event.clipboardData.items;
      for (const index in items) {
        const item = items[index];

        if (item.kind === 'string' && item.type === 'text/plain') {
          connectWithUri(event.clipboardData.getData('Text'));
        }
      }
    },
    [wcClientData, wcConnect]
  );

  useEffect(() => {
    async function getSafe() {
      const safeSdk = await getSafeSdk(safeAddress, provider);
      setSafeOwners(await safeSdk.getOwners());
      const safeBalance = await safeSdk.getBalance();
      setSafeBalance(safeBalance);
    }
    if (account !== '') {
      getSafe();
    }
  }, [account]);

  const router = useRouter();

  return (
    <div className="App">
      <Container>
        <CardGroup>
          <Card className="text-center">
            <Card.Header>Deployed Safe</Card.Header>
            <Card.Body>
              <Card.Title>Safe Address</Card.Title>
              <Card.Text>{safeAddress}</Card.Text>
              <Card.Title>Safe Balance</Card.Title>
              <Card.Text>{formatEther(safeBalance)} Ether</Card.Text>
              <Card.Title>Owners</Card.Title>
              <ListGroup>
                {safeOwners.map((owner) => (
                  <ListGroup.Item key={owner}>{owner}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </CardGroup>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>Get signed transactions</Card.Header>
              <Card.Body>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="secondary"
                    onClick={() =>
                      withdrawSafeBalance(
                        safeBalance,
                        safeAddress,
                        account,
                        provider
                      )
                    }
                  >
                    Withdraw Safe balance
                  </Button>
                  {/*<Button variant="secondary">Middle</Button>*/}
                  {/*<Button variant="secondary">Right</Button>*/}
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Header>Interact with Protocols</Card.Header>
              <Card.Body>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="secondary"
                    onClick={() => router.push('/protocols/compound')}
                  >
                    Compound
                  </Button>
                  {/*<Button variant="secondary">Middle</Button>*/}
                  {/*<Button variant="secondary">Right</Button>*/}
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <TextField
          id="wc-uri"
          // label="Paste WalletConnect QR code or connection URI"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPaste={onPaste}
          // meta={{
          //   error: invalidQRCode ? 'Invalid QR code' : undefined,
          // }}
        />
      </Container>
    </div>
  );
}

export default SafeManagement;
