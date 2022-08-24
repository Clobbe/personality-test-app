import { VFC } from "react";
import { Row, Col } from "react-grid-system";
import { Card } from "../components/atoms";
import { ScoreLine } from "../components/molecules";
import { useResultContext } from "../context/resultsContext";

const Results: VFC = () => {
  const resultContext = useResultContext();

  return (
    <Card>
      <Row>
        <Col>
          Great! <br />
          You seems to lean more towards being a
          {resultContext.score / resultContext.maxScore >= 0.5
            ? " extroverted"
            : " introverted"}{" "}
          kind of person
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col>
          <ScoreLine score={resultContext.score} />
        </Col>
      </Row>
    </Card>
  );
};

export default Results;
