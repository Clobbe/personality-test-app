import React, { VFC } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from '../../contexts/translationContext';
import { theme } from '../../utils/theme';
import { IconVariants } from '../atoms/icons/types';
import Spacing from '../atoms/Spacing';
import SvgIcon from '../atoms/SvgIcon';
import Typography, { ITranslation } from '../atoms/Typography';

type FieldVariant = 'text' | 'email';

interface Props extends React.HTMLProps<HTMLInputElement>, ITranslation {
  title?: string;
  active?: boolean;
  borderColor?: string;
  mandatory?: boolean;
  variant?: FieldVariant;
  error?: string;
  placeholder?: string;
  placeholderParams?: string;
  icon?: IconVariants;
}

interface IStyledTextInput
  extends React.HTMLProps<HTMLInputElement | HTMLDivElement>,
    ITranslation {
  borderColor?: string;
  disabled?: boolean;
  error?: string;
}

const StyledTextInputContainer = styled.div<IStyledTextInput>`
  display: flex;
  height: 38px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.grey[0]};
  padding-right: 8px;
  border-radius: 4px;
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${theme.colors.red[100]};
    `}}
  :disabled {
    color: ${theme.colors.grey[20]};
    outline: none;
  }
`;

const StyledTextInput = styled.input<IStyledTextInput>`
  display: flex;
  height: 21px;
  width: 100%;
  background-color: transparent;
  border-radius: 4px;
  padding: 8px 16px;
  outline:none;
  ${({ error }) =>
    error &&
    css`
      border: none;
    `}}
    ${({ error }) =>
      !error &&
      css`
        :focus {
          border: 1px solid ${theme.colors.grey[100]};
        }
        border: 1px solid ${theme.colors.grey[40]}; ;
      `}}
  
  :placeholder {
    letter-spacing: -2%;
    font-family: ${theme.font};
  }
`;

const StyledErrorMsg = styled(Typography)`
  padding: 0 0 0 8px;
  margin-top: 8px;
  color: ${theme.colors.red[100]};
`;

const TextInput: VFC<Props> = ({
  title,
  placeholder,
  borderColor,
  disabled,
  mandatory = false,
  error,
  onChange,
  icon,
}) => {
  const { translate } = useTranslation();
  const translatedPlaceholder = placeholder && translate(placeholder, null);
  return (
    <>
      <Typography translateKey={title} variant="input-label">
        {mandatory ? `${title} *` : title}
      </Typography>
      <StyledTextInputContainer error={error}>
        <StyledTextInput
          disabled={disabled}
          borderColor={borderColor}
          placeholder={translatedPlaceholder}
          onChange={onChange}
          error={error}
        />
        {!!icon && !error && (
          <SvgIcon
            color={theme.colors.grey[100]}
            icon={icon}
            iconSize="small"
          />
        )}
        {error && (
          <SvgIcon
            color={theme.colors.red[100]}
            icon="cross"
            iconSize="small"
          />
        )}
      </StyledTextInputContainer>
      {!!error && <Spacing />}
      {!!error && (
        <StyledErrorMsg variant="input-label">{error}</StyledErrorMsg>
      )}
    </>
  );
};

export default TextInput;
