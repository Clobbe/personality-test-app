import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Index from "./pages/Index";
import Questionaire from "./pages/Questionaire";
import Result from "./pages/Result";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Personality Test App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/questionaire" element={<Questionaire />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
