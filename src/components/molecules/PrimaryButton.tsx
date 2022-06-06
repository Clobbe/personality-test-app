import React, { VFC } from "react";
import styled from "styled-components";
import Typography from "../atoms/Typography";
import { theme } from "../../utils/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  loading?: boolean;
  radius?: number;
  backgroundColor?: string;
}

const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: content;
  padding: 0 20px;
  height: 40px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ disabled }) => (disabled ? "0.9" : "1")};
  border-radius: ${({ radius }) =>
    radius ? `${radius}` : `${theme.spacing.radius}px`};
  border: none;
  :hover {
    opacity: 0.9;
  }
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "allowed")};
`;

const PrimaryButton: VFC<Props> = ({
  children,
  disabled = false,
  radius,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      backgroundColor={theme.colors.primary[100]}
      radius={radius}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      <Typography variant="button" color="white">
        {children}
      </Typography>
    </StyledButton>
  );
};

export default PrimaryButton;
