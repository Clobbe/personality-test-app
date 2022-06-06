import { faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { VFC } from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import { iconStyle, theme } from "../../utils";
import Spacing from "../atoms/Spacing";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  lineWidth?: number | undefined;
}

const StyledLine = styled.div`
  display: flex;
  flex: 1;
  height: 3px;
  background-color: ${theme.colors.grey[100]};
`;

const StyledScorePoint = styled.div<Props>`
  display: inline-flex;
  position: absolute;
  top: -12px;
  width: 4px;
  height: 25px;
  margin-left: ${({ score, lineWidth }) => lineWidth! - score}px;
  background-color: ${theme.colors.primary[100]};
  border: 2px solid #fff;
`;

const ScoreLine: VFC<Props> = ({ score = 0 }) => {
  const lineWidth = document.getElementById("StyledLine")?.clientWidth;

  const scaledScore = lineWidth! * (score / lineWidth!);
  console.log(scaledScore);

  console.log(lineWidth);
  return (
    <Container>
      <Row align="center" justify="center">
        <StyledLine id="StyledLine">
          <StyledScorePoint score={scaledScore} lineWidth={lineWidth} />
        </StyledLine>
      </Row>
      <Spacing spacing={3} />
      <Row justify="around" align="center">
        <Col>
          <Row align="center">
            <FontAwesomeIcon icon={faFaceGrinStars} {...iconStyle} />
          </Row>
          <Row>Introvert</Row>
        </Col>
        <Col>
          <Row justify="end">
            <FontAwesomeIcon icon={faFaceGrinStars} {...iconStyle} />
          </Row>
          <Row justify="end">Extrovert</Row>
        </Col>
      </Row>
    </Container>
  );
};
export default ScoreLine;
