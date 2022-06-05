import React, { VFC } from 'react';
import styled, { css } from 'styled-components';
import { useSettings } from '../../contexts/settingsContext';
import { theme } from '../../utils/theme';
import Typography, { ITranslation } from '../atoms/Typography';

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ITranslation {
  disabled?: boolean;
  radius?: string;
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

const SecondaryButton: VFC<Props> = ({
  children,
  translateKey,
  translateParams,
  ...props
}) => {
  const { cornerRadius } = useSettings();
  return (
    <StyledButton radius={cornerRadius} {...props}>
      <Typography
        translateKey={translateKey}
        translateParams={translateParams}
        align="center"
        color={theme.colors.grey[100]}
        variant="button"
      >
        {children}
      </Typography>
    </StyledButton>
  );
};

export default SecondaryButton;
