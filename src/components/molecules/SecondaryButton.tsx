import React, { VFC } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";
import { Typography } from "../atoms";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  radius?: string | number;
}

const StyledButton = styled.button<Props>`
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 40px;
  background-color: ${theme.colors.grey[30]};
  border-radius: ${({ radius }) =>
    radius ? `${radius}` : `${theme.spacing.radius}px`};
  border: none;
  &:hover {
    background-color: ${theme.colors.grey[40]};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.1;
    `}
`;

export const SecondaryButton: VFC<Props> = ({ children, radius, ...props }) => {
  return (
    <StyledButton radius={radius} {...props}>
      <Typography
        align="center"
        color={theme.colors.grey[100]}
        variant="button"
      >
        {children}
      </Typography>
    </StyledButton>
  );
};
