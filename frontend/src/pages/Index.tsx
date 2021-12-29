import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
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
          <Col>
            <p>
              With this app you get to answer 5 questions that will tell if your
              most likely introverted or extroverted kind of person. Or perhaps
              somewhere in between 😉 <br /> Good luck and have fun!
            </p>
            <p>
              <b>Tip!</b> on each question, pick the answer that first align
              most with your beliefs and gut feeling.
            </p>
          </Col>
        </Row>
        <Row>
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
