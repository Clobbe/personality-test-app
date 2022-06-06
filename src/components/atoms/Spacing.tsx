import React, { VFC } from "react";
import styled, { css } from "styled-components";

interface Props {
  spacing?: number;
  horizontal?: boolean;
}
const StyledSpacer = styled.div<Props>`
  height: ${({ spacing }) => spacing && spacing * 8}px;
  ${({ horizontal, spacing }) =>
    horizontal &&
    css`
      width: ${spacing && spacing * 8}px;
      height: 0px;
    `};
`;

const Spacing: VFC<Props> = ({ horizontal, spacing = 1 }) => (
  <StyledSpacer horizontal={horizontal} spacing={spacing} />
);

export default Spacing;
