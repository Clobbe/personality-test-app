import React, { VFC } from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
}
const Wrapper = styled.div`
  width: 400px;
  flex-direction: row;
`;
const StyledLine = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  background-color: #000;
`;
const StyledScorePoint = styled.div<Props>`
  display: flex;
  position: absolute;
  bottom: 22px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: ${({ score }) => (score > 12 ? 400 - score : 10 * score)}px;
  background-color: #6faf08;
  border: 2px solid #fff;
`;
const StyledExtremeValueLeft = styled.span`
  display: inline-block;
  margin-top: 10px;
  position: relative;
  left: -30px;
`;
const StyledExtremeValueRight = styled.span`
  display: inline-block;
  margin-top: 10px;
  position: absolute;
  left: 380px;
`;

const ScoreLine: VFC<Props> = ({ score = 0 }) => {
  return (
    <Wrapper>
      <StyledLine>
        <StyledScorePoint score={score} />
      </StyledLine>
      <StyledExtremeValueLeft>🤩 Extrovert</StyledExtremeValueLeft>
      <StyledExtremeValueRight>😶 Introvert</StyledExtremeValueRight>
    </Wrapper>
  );
};
export default ScoreLine;
