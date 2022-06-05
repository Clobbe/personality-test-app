import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";
import Card from "../components/atoms/Card";

const Index = () => {
  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <p>
              With this app you get to answer 5 questions that will tell if
              you're leaning more towards introverted ( 😶 ) or towards
              extroverted ( 🤩 ) kind of person. <br />
            </p>
            <p>
              Or perhaps somewhere in between 😉 <br /> Good luck and have fun!
            </p>
            <p>
              <b>Tip!</b> on each question, pick the answer that first align
              most with your beliefs and gut feeling.
            </p>
          </Col>
        </Row>
        <Row align="center">
          <Col>
            <Link to="/questionaire">
              <Button>Get Started</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Index;
