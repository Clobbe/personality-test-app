import React, { VFC } from "react";
import styled from "styled-components";

interface IButton extends React.HTMLProps<HTMLButtonElement> {}

const StyledButton = styled.button`
  min-width: 200px;
  padding: 10px 5px 10px 5px;
  background-color: #6faf08;
  outline: 0;
  border: 0px solid #000;
  border-radius: 5px;
  :hover {
    background-color: #4a7505;
  }
`;

const StyledButtonText = styled.div`
  font-family: sans-serif;
  size: 25px;
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
