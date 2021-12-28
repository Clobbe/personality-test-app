import React, { VFC } from "react";
import styled from "styled-components";

interface IButton extends React.HTMLProps<HTMLButtonElement> {}

const StyledButton = styled.button`
  min-width: 200px;
  padding: 20px 5px 20px 5px;
  background-color: #8adb08;
`;

const StyledButtonText = styled.div`
  font-family: sans-serif;
  size: 14px;
  color: #fff;
`;

const Button: VFC<IButton> = ({ children }) => {
  return (
    <StyledButton>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
