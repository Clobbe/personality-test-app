import React, { VFC } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";

type AlignmentVariant = "left" | "center" | "right";
type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "p-semi-bold"
  | "body1"
  | "body1-semi-bold"
  | "body2"
  | "body2-extra-bold"
  | "body3"
  | "label-default"
  | "label-large"
  | "input-label"
  | "button"
  | "status-message"
  | "input-error"
  | undefined;

interface Props
  extends React.HTMLProps<
    | HTMLParagraphElement
    | HTMLHeadingElement
    | HTMLLabelElement
    | HTMLParagraphElement
  > {
  variant?: TextVariant;
  color?: string;
  align?: AlignmentVariant;
  fontFamily?: string;
}

export const StyledTypography = css<Props>`
  display: block;
  color: ${({ color }) => color || theme.colors.grey[100]};
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  letter-spacing: -2%;
  font-family: ${theme.font};
`;

const StyledH1 = styled.h1<Props>`
  ${StyledTypography};

  font-size: 36px;
  font-weight: 800;
  line-height: 40px;
`;
const StyledH2 = styled.h2<Props>`
  ${StyledTypography};
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
`;
const StyledH3 = styled.h3<Props>`
  ${StyledTypography};
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
`;
const StyledH4 = styled.h4<Props>`
  ${StyledTypography};
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
`;
const StyledH5 = styled.h5<Props>`
  ${StyledTypography};
  font-size: 16px;
`;
const StyledH6 = styled.h6<Props>`
  ${StyledTypography};
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
`;
const StyledBody1 = styled.span<Props>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
`;
const StyledBody1SemiBold = styled.span<Props>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
`;
const StyledBody2 = styled.span<Props>`
  ${StyledTypography};
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;
const StyledBody2ExtraBold = styled.span<Props>`
  ${StyledTypography};
  font-size: 14px;
  line-height: 16px;
  font-weight: 800;
`;
const StyledBody3 = styled.span<Props>`
  ${StyledTypography};
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;
const StyledParagraph = styled.p<Props>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;
const StyledParagraphSemiBold = styled.p<Props>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;
const StyledLabelDefault = styled.label<Props>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;
const StyledLabelLarge = styled.label<Props>`
  ${StyledTypography};
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
`;

const StyledInputLabel = styled.label<Props>`
  ${StyledTypography};
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  padding-left: ${theme.spacing.factor}px;
  padding-bottom: ${theme.spacing.factor / 2}px;
`;

const StyledButtonLabel = styled.span<Props>`
  ${StyledTypography};
  font-size: 14px;
  font-weight: bold;
`;

const StyledStatusMessage = styled.span<Props>`
  ${StyledTypography};
  font-size: 14px;
  font-weight: bold;
`;

const StyledInputError = styled.span<Props>`
  color: red;
  display: block;
  font-size: 12px;
`;

const getComponent = (variant: TextVariant): VFC => {
  switch (variant) {
    case "h1":
      return StyledH1;
    case "h2":
      return StyledH2;
    case "h3":
      return StyledH3;
    case "h4":
      return StyledH4;
    case "h5":
      return StyledH5;
    case "h6":
      return StyledH6;
    case "p":
      return StyledParagraph;
    case "p-semi-bold":
      return StyledParagraphSemiBold;
    case "body1":
      return StyledBody1;
    case "body1-semi-bold":
      return StyledBody1SemiBold;
    case "body2":
      return StyledBody2;
    case "body2-extra-bold":
      return StyledBody2ExtraBold;
    case "body3":
      return StyledBody3;
    case "label-default":
      return StyledLabelDefault;
    case "label-large":
      return StyledLabelLarge;
    case "input-label":
      return StyledInputLabel;
    case "button":
      return StyledButtonLabel;
    case "status-message":
      return StyledStatusMessage;
    case "input-error":
      return StyledInputError;
    default:
      return StyledBody1;
  }
};

export const Typography: VFC<Props> = ({
  children,
  variant = "body1",
  ...props
}) => {
  const Component = getComponent(variant);
  const typoProps = {
    ...props
  };

  return <Component {...typoProps}>{children}</Component>;
};
