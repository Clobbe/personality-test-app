import React, { VFC } from 'react';
import styled, { css } from 'styled-components';
import { useSettings } from '../../contexts/settingsContext';
import { useTranslation } from '../../contexts/translationContext';
import { theme } from '../../utils/theme';

export interface ITranslation {
  translateKey?: string;
  translateParams?: Record<string, unknown>;
}

type AlignmentVariant = 'left' | 'center' | 'right';
type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'p-semi-bold'
  | 'body1'
  | 'body1-semi-bold'
  | 'body2'
  | 'body2-extra-bold'
  | 'body3'
  | 'label-default'
  | 'label-large'
  | 'input-label'
  | 'button'
  | 'status-message'
  | 'input-error'
  | undefined;

interface ITypography
  extends React.HTMLProps<
      | HTMLParagraphElement
      | HTMLHeadingElement
      | HTMLLabelElement
      | HTMLParagraphElement
    >,
    ITranslation {
  variant?: TextVariant;
  color?: string;
  align?: AlignmentVariant;
  fontFamily?: string;
}

export const StyledTypography = css<ITypography>`
  display: block;
  color: ${({ color }) => color || theme.colors.grey[100]};
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  letter-spacing: -2%;
  font-family: ${({ fontFamily }) => fontFamily};
`;

const StyledH1 = styled.h1<ITypography>`
  ${StyledTypography};

  font-size: 36px;
  font-weight: 800;
  line-height: 40px;
`;
const StyledH2 = styled.h2<ITypography>`
  ${StyledTypography};
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
`;
const StyledH3 = styled.h3<ITypography>`
  ${StyledTypography};
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
`;
const StyledH4 = styled.h4<ITypography>`
  ${StyledTypography};
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
`;
const StyledH5 = styled.h5<ITypography>`
  ${StyledTypography};
  font-size: 16px;
`;
const StyledH6 = styled.h6<ITypography>`
  ${StyledTypography};
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
`;
const StyledBody1 = styled.span<ITypography>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
`;
const StyledBody1SemiBold = styled.span<ITypography>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
`;
const StyledBody2 = styled.span<ITypography>`
  ${StyledTypography};
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;
const StyledBody2ExtraBold = styled.span<ITypography>`
  ${StyledTypography};
  font-size: 14px;
  line-height: 16px;
  font-weight: 800;
`;
const StyledBody3 = styled.span<ITypography>`
  ${StyledTypography};
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;
const StyledParagraph = styled.p<ITypography>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;
const StyledParagraphSemiBold = styled.p<ITypography>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;
const StyledLabelDefault = styled.label<ITypography>`
  ${StyledTypography};
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;
const StyledLabelLarge = styled.label<ITypography>`
  ${StyledTypography};
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
`;

const StyledInputLabel = styled.label<ITypography>`
  ${StyledTypography};
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  padding-left: ${theme.spacing.factor}px;
  padding-bottom: ${theme.spacing.factor / 2}px;
`;

const StyledButtonLabel = styled.span<ITypography>`
  ${StyledTypography};
  font-size: 14px;
  font-weight: bold;
`;

const StyledStatusMessage = styled.span<ITypography>`
  ${StyledTypography};
  font-size: 14px;
  font-weight: bold;
`;

const StyledInputError = styled.span<ITypography>`
  color: red;
  display: block;
  font-size: 12px;
`;

const getComponent = (variant: TextVariant): VFC => {
  switch (variant) {
    case 'h1':
      return StyledH1;
    case 'h2':
      return StyledH2;
    case 'h3':
      return StyledH3;
    case 'h4':
      return StyledH4;
    case 'h5':
      return StyledH5;
    case 'h6':
      return StyledH6;
    case 'p':
      return StyledParagraph;
    case 'p-semi-bold':
      return StyledParagraphSemiBold;
    case 'body1':
      return StyledBody1;
    case 'body1-semi-bold':
      return StyledBody1SemiBold;
    case 'body2':
      return StyledBody2;
    case 'body2-extra-bold':
      return StyledBody2ExtraBold;
    case 'body3':
      return StyledBody3;
    case 'label-default':
      return StyledLabelDefault;
    case 'label-large':
      return StyledLabelLarge;
    case 'input-label':
      return StyledInputLabel;
    case 'button':
      return StyledButtonLabel;
    case 'status-message':
      return StyledStatusMessage;
    case 'input-error':
      return StyledInputError;
    default:
      return StyledBody1;
  }
};

const Typography: React.FC<ITypography> = ({
  translateKey,
  translateParams,
  children,
  variant = 'body1',
  ...props
}) => {
  const Component = getComponent(variant);
  const { fontFamily } = useSettings();
  const { translate } = useTranslation();
  const typoProps = {
    ...props,
    fontFamily,
  };

  return (
    <Component {...typoProps}>
      {translateKey ? translate(translateKey, translateParams) : children}
    </Component>
  );
};
export default Typography;
