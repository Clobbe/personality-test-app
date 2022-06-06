import {
  faFaceGrinStars,
  faFaceMeh,
  faFaceMehBlank
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import Card from "../components/atoms/Card";
import PrimaryButton from "../components/molecules/PrimaryButton";
import { iconStyle } from "../utils";

const Index = () => {
  const history = useHistory();
  return (
    <Card>
      <Row>
        <Col>
          <p>
            With this app you get to answer 5 questions that will tell if you're
            leaning more towards introverted ({" "}
            {<FontAwesomeIcon icon={faFaceMehBlank} {...iconStyle} />} ) or
            towards extroverted ({" "}
            {<FontAwesomeIcon icon={faFaceGrinStars} {...iconStyle} />} ) kind
            of person. <br />
          </p>
          <p>Or perhaps somewhere in between, Good luck and have fun!</p>
          <p>
            <b>Tip!</b> on each question, pick the answer that first align most
            with your beliefs and gut feeling.
          </p>
        </Col>
      </Row>
      <Row justify="end">
        <PrimaryButton onClick={() => history.push("/questionaire")}>
          Get Started
        </PrimaryButton>
      </Row>
    </Card>
  );
};

export default Index;
