import React, { VFC } from "react";
import styled from "styled-components";

interface IOptionButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  value?: number;
  onClick?: () => void;
}

const StyledButton = styled.button<IOptionButton>`
  text-align: center;
  min-width: 150px;
  margin: 50px;
  padding: 10px 5px 10px 5px;
  background-color: ${({ selected }) => (selected ? "red" : "#f0ffd9")};
  border: ${({ selected }) =>
    selected ? "2px solid #4c6129" : "2px solid #b1d37c"};
  border-radius: 5px;
  :hover {
    border: 2px solid #4a7505;
  }
`;

const StyledButtonText = styled.div`
  font-family: sans-serif;
  size: 16px;
  color: #88888;
`;

const OptionButton: VFC<IOptionButton> = ({
  selected = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton onClick={onClick} selected={selected}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default OptionButton;
