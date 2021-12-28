import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Questionaire from "./pages/Questionaire";

function App() {
  const [personalityScore, setPersonalityScore] = useState<number>(0);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Personality Test App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Questionaire />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
