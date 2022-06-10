import React, { VFC } from "react";
import styled from "styled-components";
import { theme } from "../../utils";

interface ICard extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

const StyledCard = styled.div<ICard>`
  background-color: ${theme.colors.grey[0]};
  padding: ${theme.spacing.paddingVertical}px
    ${theme.spacing.paddingHorizontal}px;
  border-radius: ${theme.spacing.radius}px;
  border: 2px solid ${theme.colors.primary[60]};
`;

export const Card: VFC<ICard> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
