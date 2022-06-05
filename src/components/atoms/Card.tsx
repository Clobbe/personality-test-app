import React, { VFC } from "react";
import styled from "styled-components";

interface ICard extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

const StyledCard = styled.div<ICard>`
  max-width: 800px;
  margin: 10% auto;
  padding: 20px 50px 20px 50px;
  border-radius: 8px;
  border: 1px solid rgb(186, 202, 168);
`;

const Card: VFC<ICard> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
