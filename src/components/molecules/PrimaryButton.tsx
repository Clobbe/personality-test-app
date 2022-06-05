import React, { VFC } from 'react';
import styled from 'styled-components';
import SvgIcon from '../atoms/SvgIcon';
import LoadingSpinner from './LoadingSpinner';
import { IconSize, IconVariants } from '../atoms/icons/types';
import Typography, { ITranslation } from '../atoms/Typography';
import Spacing from '../atoms/Spacing';

import { useSettings } from '../../contexts/settingsContext';

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ITranslation {
  icon?: IconVariants;
  disabled?: boolean;
  loading?: boolean;
  radius?: string;
  backgroundColor?: string;
  iconSize?: IconSize;
  iconColor?: string;
}

const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: content;
  padding: 0 20px;
  height: 40px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ disabled }) => (disabled ? '0.9' : '1')};
  border-radius: ${({ radius }) => radius};
  border: none;
  :hover {
    opacity: 0.9;
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'allowed')};
`;

const PrimaryButton: VFC<Props> = ({
  children,
  translateKey,
  translateParams,
  icon,
  iconSize = 'large',
  loading,
  disabled = false,
  iconColor = 'white',
  onClick,
  ...props
}) => {
  const { cornerRadius, interactionColor } = useSettings();
  return (
    <StyledButton
      backgroundColor={interactionColor}
      radius={cornerRadius}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <Typography
            translateKey={translateKey}
            translateParams={translateParams}
            variant="button"
            color="white"
          >
            {children}
          </Typography>
          {!!icon && <Spacing horizontal spacing={2} />}
          {!!icon && (
            <SvgIcon color={iconColor} icon={icon} iconSize={iconSize} />
          )}
        </>
      )}
    </StyledButton>
  );
};

export default PrimaryButton;
