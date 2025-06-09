import React, { type ReactNode } from "react";
import { Styled } from "./card.styles";

interface CardProps {
    title?: string;
    children: ReactNode;
    className?: string;
    containerId?: string;
    ref?: React.Ref<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <Styled.Container className={className}>
            {title && <Styled.Title>{title}</Styled.Title>}
            {children}
        </Styled.Container>
    );
};

export { Card };
