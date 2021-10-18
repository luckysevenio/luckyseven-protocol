import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { ActionTypes, useAppDispatch } from '../store';
import {
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Col,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import Link from 'next/link';

function Configuration() {
  const dispatch = useAppDispatch();
  const [ownersLength, setOwnersLength] = useState(1);
  const [threshold, setThreshold] = useState(1);
  const [owners, setOwners] = useState(['']);

  useEffect(() => {
    owners.length = ownersLength;
    setThreshold(1);
  }, [ownersLength]);

  async function handleNewOwner(owner: string, index: number) {
    const newOwners: string[] = [...owners];
    newOwners[index] = owner;
    setOwners(newOwners);
  }

  async function saveOwners() {
    await dispatch({
      type: ActionTypes.SET_SAFE,
      payload: { owners, threshold },
    });
  }
  return (
    <div className="App">
      <Container>
        <Col>
          <CardGroup>
            <Card className="text-center">
              <Card.Header>Create a Safe</Card.Header>
              <Card.Body>
                <Card.Title>Define the Safe owners</Card.Title>
                <Card.Text>Please input the owners of the Safe.</Card.Text>
                {Array.from(Array(ownersLength).keys()).map((v, i) => (
                  <InputGroup className="mb-3" key={i.toString()}>
                    <InputGroup.Text id="basic-addon1">
                      Owner {i + 1}
                    </InputGroup.Text>
                    <FormControl
                      onChange={(event) => {
                        handleNewOwner(event.target.value, i);
                      }}
                      placeholder="Address"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={owners[i]}
                    />
                  </InputGroup>
                ))}
                <ButtonGroup className="xs-3">
                  <Button
                    onClick={() => setOwnersLength(ownersLength + 1)}
                    variant="primary"
                  >
                    Add owner
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="xs-3">
                  <Button
                    onClick={() =>
                      setOwnersLength(ownersLength === 0 ? 0 : ownersLength - 1)
                    }
                    variant="primary"
                  >
                    Remove owner
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Header>Define the Safe threshold</Card.Header>
              <Card.Body>
                <Card.Title>Set the Safe threshold.</Card.Title>
                <Card.Text>
                  Please consider that one of the owners is XMargin.
                </Card.Text>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {threshold}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {Array.from(Array(ownersLength).keys()).map((v, i) => (
                      <Dropdown.Item onClick={() => setThreshold(i + 1)}>
                        {i + 1}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <br />

                <Link href="/deployment">
                  <Button
                    className="xs-12"
                    onClick={saveOwners}
                    variant="primary"
                  >
                    Review Safe
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Container>
    </div>
  );
}

export default Configuration;
