import { Container, Row, Col } from "react-grid-system";
import { useLocation } from "react-router";
import Card from "../components/atoms/Card";

/* 
    SCOPE :: calculate the score and show if person is intro / extrovert
    TODO :: implement fetching of individual question-scores
    //TODO :: create components needed in order to display result
    TODO :: add icons for intro/extrovert + an animation in a circle around the svg. i.e. "You must be {intro/extrovert}"
    TODO :: display the score
*/

type LocationState = {
  score: {
    score: number;
  };
};

const Results = () => {
  const data = useLocation();
  const score = (data.state as LocationState)?.score;

  return (
    <Container>
      <Card>
        <Row>
          <Col>{score}</Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Results;
