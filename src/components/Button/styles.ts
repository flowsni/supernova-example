import styled, { css } from 'styled-components';
import { theme } from '../../build/theme';
import { ButtonVariant, ButtonSpacing } from './types';

const buttonColors = theme.color.component.button;

const buttonBorderRadiiValue =
  theme.radius['border-radius'].button.radius.value.measure.value;

const borderColors = buttonColors.border as any;

function getVariantStyles(variant: ButtonVariant) {
  const textColor =
    variant === 'secondary'
      ? buttonColors.text['on-secondary']
      : buttonColors.text['on-primary'];

  const currentVariantColors = buttonColors.background[variant] as {
    default: string;
    hover: string;
    disabled: string;
  };

  const borderColor = borderColors[variant];

  const border = borderColor ? `1px solid ${borderColor?.default}` : 'none';

  return css`
    background-color: ${currentVariantColors.default};
    color: ${textColor};

    border: ${border};

    &:hover {
      background-color: ${currentVariantColors.hover};
      border-color: ${borderColor?.hover};
    }

    &:disabled {
      background-color: ${currentVariantColors.disabled};
      border-color: ${borderColor?.disabled};
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
  height: fit-content;
`;
