import styled from "@emotion/styled";
import type { CardProps } from "@mui/material";

const Container = styled.div<CardProps>`
    background-color: var(--color-paper);
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
`;

const Title = styled.h2`
    font-size: var(--font-size-lg);
    color: var(--color-text-primary);
    margin-bottom: 10px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.2;
    transition: color var(--transition-duration) ease;
    &:hover {
        color: var(--color-primary-dark);
    }
`;

export const Styled = {
    Container,
    Title,
};
