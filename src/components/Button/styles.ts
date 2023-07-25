import styled, { css } from 'styled-components';
import { theme } from '../../build/theme';
import { ButtonVariant, ButtonSpacing } from './types';

const buttonColors = theme.color.component.button;

const buttonBorderRadiiValue =
  theme.radius['border-radius'].button.radius.value.measure.value;

function getVariantStyles(variant: ButtonVariant) {
  const color =
    variant === 'secondary'
      ? buttonColors.text['on-secondary']
      : buttonColors.text['on-primary'];
  const currentVariantColors = buttonColors.background[variant] as {
    default: string;
    hover: string;
    disabled: string;
  };
  return css`
    background-color: ${currentVariantColors.default};
    color: ${color};
    border: none;

    &:hover {
      background-color: ${currentVariantColors.hover};
    }

    &:disabled {
      background-color: ${currentVariantColors.disabled};
    }
  `;
}

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  spacing: ButtonSpacing;
}>`
  ${(p) => getVariantStyles(p.variant)}
  border-radius: ${buttonBorderRadiiValue}px;
  padding: ${(p) =>
    theme.measure.spacing.component[p.spacing].padding.measure.value}px;
  cursor: pointer;
`;
