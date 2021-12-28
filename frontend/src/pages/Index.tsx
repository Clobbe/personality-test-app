import { Container, Row, Col } from "react-grid-system";
import Button from "../components/atoms/Button";
import Card from "../components/atoms/Card";

/*

    TODO :: svg icons for "are you intro / extro"
    TODO :: add introductionary text
    TODO :: add "get started"-button
    TODO :: create button-component to reuse
    TODO :: create radiobutton-component to reuse between pages
    TODO :: create paper-component to frame the content

 */

const Index = () => {
  return (
    <Container>
      <Card>
        <Row>
          <Col>Index Page</Col>
        </Row>
        <Row>
          <Col>
            <Button>Next</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Index;
