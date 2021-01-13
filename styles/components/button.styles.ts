import styled, { css } from "styled-components";

import { ColorHelper } from "../../libs/ColorHelper";

interface IContainerProps {
  backgroundColor?: string;
  textColor?: string;
}

const Container = styled.div<IContainerProps>`
  .button-icon {
    max-width: 50px;
  }

  .btn {
    ${({ backgroundColor, textColor }) =>
      css`
        &:focus,
        &:active {
          ${() =>
            backgroundColor &&
            `
          border-color: ${backgroundColor} !important; 
    box-shadow: 0 0 0 0.2rem ${ColorHelper.hexToRgba(
      backgroundColor,
      0.5
    )} !important;
          `}
        }

        ${() =>
          backgroundColor && `background-color: ${backgroundColor} !important`};
        ${() => textColor && `color: ${textColor};`}
      `}
  }
`;

const Text = styled.span``;

const IconSlot = styled.span``;

export const Button__ = {
  Container,
  Text,
  IconSlot,
};
