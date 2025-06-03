// header.styles.ts
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    padding: 0;
    margin: 0;
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: var(--color-text);
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &.active {
        background-color: var(--color-primary);
        color: white;
    }

    &:hover:not(.active) {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const Styled = {
    List,
    ListItem,
    Link,
};
