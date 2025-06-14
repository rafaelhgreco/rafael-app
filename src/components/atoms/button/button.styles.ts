import styled from "@emotion/styled";
import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "small" | "medium" | "large";

export interface StyledButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    label?: string;
}

const getButtonStyles = ({
    variant = "primary",
    size = "medium",
}: StyledButtonProps) => {
    const variantStyles = {
        primary: `
      background-color: #007bff;
      font-weight: 600;
      color: white;
      border: none;
      &:hover {
        background-color: #0069d9;
      }
    `,
        secondary: `
      background-color: #6c757d;
      color: white;
      border: none;
      &:hover {
        background-color: #5a6268;
      }
    `,
        outline: `
      background-color: transparent;
      color: #007bff;
      border: 1px solid #007bff;
      &:hover {
        background-color: rgba(0, 123, 255, 0.1);
      }
    `,
    };

    const sizeStyles = {
        small: `
      padding : var(--padding-md);
      font-size: var(--font-size-base);
    `,
        medium: `
      padding : var(--padding-md);
      font-size: var(--font-size-lg);
    `,
        large: `
      padding : var(--padding-md);
      front-size: var(--font-size-lg);
    `,
    };

    return `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
  `;
};

const Button = styled.button<StyledButtonProps>`
    border-radius: var(--border-radius, 4px);
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${(props) => getButtonStyles(props)}

    &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
    }
`;
export const Styled = {
    Button,
};
