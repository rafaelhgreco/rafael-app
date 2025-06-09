import React from "react";
import { Styled } from "./button.styles";

export interface ButtonProps {
    primary?: boolean;
    label: string | number;
    onClick: () => void;
    variant: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
    // active?: boolean;
}

const BasicButton: React.FC<ButtonProps> = ({
    label,
    size,
    onClick,
    variant = "primary",
    // active = false,
    ...props
}) => {
    const handleClick = () => onClick();
    return (
        <Styled.Button onClick={handleClick} size={size} variant={variant}>
            {label || props.children}
        </Styled.Button>
    );
};

export { BasicButton };
