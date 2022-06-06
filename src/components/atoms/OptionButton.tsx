import React, { VFC } from "react";
import styled from "styled-components";
import { theme } from "../../utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: number;
  onClick?: () => void;
}

const StyledButton = styled.button<Props>`
  text-align: center;
  min-width: 150px;
  margin: ${theme.spacing.margin}px;
  padding: 15px 20px;
  background-color: ${theme.colors.green[10]};
  border: ${`2px solid ${theme.colors.green[100]}`};
  border-radius: ${theme.spacing.radius}px;
  :hover {
    border: ${`2px solid ${theme.colors.green[80]}`};
    background-color: ${theme.colors.green[20]};
  }
`;

const StyledButtonText = styled.div`
  font-family: ${theme.font};
  size: 16px;
  color: ${theme.colors.grey[80]};
`;

const OptionButton: VFC<Props> = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default OptionButton;
