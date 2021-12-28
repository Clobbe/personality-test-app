import { Container, Row, Col } from "react-grid-system";
import Card from "../components/atoms/Card";

/* 
    SCOPE :: calculate the score and show if person is intro / extrovert
    TODO :: implement function to calculate score
    TODO :: implement fetching of individual question-scores
    //TODO :: create components needed in order to display result
    TODO :: add some svg-img for intro/extrovert + an animation in a circle around the svg. i.e. "You must be {intro/extrovert}"
    TODO :: display the score
*/

const Results = () => {
  return (
    <Container>
      <Card>
        <Row>
          <Col>Result Page</Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Results;
