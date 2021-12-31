import { Container, Row, Col } from "react-grid-system";
import { useLocation } from "react-router-dom";
import Card from "../components/atoms/Card";
import ScoreLine from "../components/molecules/ScoreLine";

/* 
    //TODO :: create components needed in order to display result
    //TODO :: implement fetching of individual question-scores
    TODO :: add icons for intro/extrovert + an animation in a circle around the svg. i.e. "You must be {intro/extrovert}"
    //TODO :: display the score
*/

type LocationState = {
  score: {
    score: number;
  };
};

const Results = () => {
  const location = useLocation();
  const questionScore = (location.state as LocationState).score;
  console.log("qScore", questionScore);
  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <ScoreLine score={20} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Results;
