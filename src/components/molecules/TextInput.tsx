import React, { VFC } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";
import { Spacing, Typography } from "../atoms/";

type FieldVariant = "text" | "email";

interface Props extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  active?: boolean;
  borderColor?: string;
  mandatory?: boolean;
  variant?: FieldVariant;
  error?: string;
  placeholder?: string;
  placeholderParams?: string;
}

interface IStyledTextInput
  extends React.HTMLProps<HTMLInputElement | HTMLDivElement> {
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

export const TextInput: VFC<Props> = ({
  title,
  placeholder,
  borderColor,
  disabled,
  mandatory = false,
  error,
  onChange
}) => {
  return (
    <>
      <Typography variant="input-label">
        {mandatory ? `${title} *` : title}
      </Typography>
      <StyledTextInputContainer error={error}>
        <StyledTextInput
          disabled={disabled}
          borderColor={borderColor}
          placeholder={placeholder}
          onChange={onChange}
          error={error}
        />
      </StyledTextInputContainer>
      {!!error && <Spacing />}
      {!!error && (
        <StyledErrorMsg variant="input-label">{error}</StyledErrorMsg>
      )}
    </>
  );
};
