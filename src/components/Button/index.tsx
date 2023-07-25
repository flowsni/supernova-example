import React, { ReactElement } from 'react';
import { StyledButton } from './styles';
import { ButtonSpacing, ButtonVariant } from './types';

type ButtonProps = {
  variant?: ButtonVariant;
  spacing?: ButtonSpacing;
  disabled?: boolean;
};

export function Button({
  variant = 'primary',
  spacing = 'button-m',
  disabled = false,
}: ButtonProps): ReactElement {
  return (
    <StyledButton variant={variant} spacing={spacing} disabled={disabled}>
      This is {variant} button
    </StyledButton>
  );
}
