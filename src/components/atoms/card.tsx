// src/components/atoms/Card/Card.tsx
import React, { type ReactNode } from "react";
import { Styled } from "./card.styles";

interface CardProps {
    title?: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <Styled.Container>
            {title && <Styled.Title>{title}</Styled.Title>}
            {children}
        </Styled.Container>
    );
};

export { Card };
