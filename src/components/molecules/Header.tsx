import React, { VFC } from "react";
import { Col, Row } from "react-grid-system";
import Typography from "../atoms/Typography";

export const Header: VFC = () => {
  return (
    <Row>
      <Col>
        <Typography variant="h1">Personality Test App</Typography>
        <Typography variant="h3">
          {/* TODO :: replace emojis w. font awesome */}
          Are you 🤩 (extrovert) or 😶 (introvert)
        </Typography>
      </Col>
    </Row>
  );
};
