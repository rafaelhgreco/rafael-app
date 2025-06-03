import React from "react";
import { Styled } from "./button.styles";

export interface ButtonProps {
    primary?: boolean;
    label: string | number;
    onClick: () => void;
    variant: "primary" | "secondary" | "outline";
    size?: "small" | "large";
    children?: React.ReactNode;
}

const BasicButton: React.FC<ButtonProps> = ({
    label,
    size,
    onClick,
    variant = "primary",
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
