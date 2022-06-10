import { VFC } from "react";
import {
  faFaceGrinStars,
  faFaceMehBlank
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-grid-system";
import { iconStyle } from "../../utils";
import { Typography } from "../atoms";

export const IntroductionText: VFC = () => {
  return (
    <Row>
      <Col xl={6} lg={8}>
        <Typography variant="p">
          With this app you get to answer 5 questions that will tell if you're
          leaning more towards introverted ({" "}
          {<FontAwesomeIcon icon={faFaceMehBlank} {...iconStyle} />} ) or
          towards extroverted ({" "}
          {<FontAwesomeIcon icon={faFaceGrinStars} {...iconStyle} />} ) kind of
          person.
        </Typography>
        <Typography variant="p">
          Or perhaps somewhere in between, Good luck and have fun!
        </Typography>
        <Typography variant="p">
          <b>Tip!</b> on each question, pick the answer that first align most
          with your beliefs and gut feeling.
        </Typography>
      </Col>
    </Row>
  );
};
