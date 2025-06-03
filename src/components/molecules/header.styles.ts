import styled from "styled-components";

const ListItem = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 10px 20px;
    font-size: var(--font-size-base);
    color> var(--color-text-primary);
    cursor: pointer;
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
        color: var(--color-primary-dark);
    }
`;

export const Styled = {
    ListItem,
    List,
    Link,
};
