import React, { useEffect, useState, VFC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { iconStyle, theme } from "../../utils";
import { Spacing } from "../atoms";
import { useResultContext } from "../../context/resultsContext";

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
  margin-left: ${({ score }) => score}px;
  background-color: ${theme.colors.primary[100]};
  border: 2px solid #fff;
`;

export const ScoreLine: VFC<Props> = ({ score }) => {
  const resultContext = useResultContext();

  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const styledLineWidth = document?.getElementById("StyledLine")
      ?.clientWidth as number;

    setLineWidth(styledLineWidth);
  }, []);

  const positionScore =
    (resultContext.score / resultContext.maxScore) * lineWidth;

  return (
    <Container>
      <Row align="center" justify="center">
        <StyledLine id="StyledLine">
          <StyledScorePoint score={positionScore} />
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
