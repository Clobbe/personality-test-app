import { VFC } from "react";
import { Row } from "react-grid-system";
import { useHistory } from "react-router-dom";
import { getQuestions } from "../api/firebase";
import { Card } from "../components/atoms";
import { PrimaryButton } from "../components/molecules";
import { IntroductionText } from "../components/organisms";

const Index: VFC = () => {
  const history = useHistory();
  getQuestions();

  return (
    <Card>
      <IntroductionText />
      <Row justify="end">
        <PrimaryButton onClick={() => history.push("/questionaire")}>
          Get Started
        </PrimaryButton>
      </Row>
    </Card>
  );
};

export default Index;
