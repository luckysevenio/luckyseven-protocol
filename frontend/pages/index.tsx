import React, { useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

function App() {
  const [number, setNumber] = useState((Math.random() * 1000) | 0);
  function handleRandomNumber() {
    setNumber((Math.random() * 1000) | 0);
  }
  return (
    <div className="App">
      <Container>
        <Col>
          <Row>
            <CardGroup>
              <Card className="text-center">
                <Card.Body>
                  <Link href="/configuration">
                    <Button>Create a safe</Button>
                  </Link>
                </Card.Body>
              </Card>
            </CardGroup>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
