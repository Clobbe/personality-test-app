import React, { VFC } from "react";
import { Col, Row } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinStars,
  faFaceMehBlank
} from "@fortawesome/free-solid-svg-icons";
import Typography from "../atoms/Typography";
import { iconStyle } from "../../utils";

export const Header: VFC = () => {
  return (
    <Row align="center" justify="center">
      <Col>
        <Typography variant="h1">Personality Test App</Typography>
        <Typography variant="h3">
          {/* TODO :: replace emojis w. font awesome */}
          Are you {
            <FontAwesomeIcon icon={faFaceGrinStars} {...iconStyle} />
          }{" "}
          (extrovert) or{" "}
          {<FontAwesomeIcon icon={faFaceMehBlank} {...iconStyle} />} (introvert)
        </Typography>
      </Col>
    </Row>
  );
};
