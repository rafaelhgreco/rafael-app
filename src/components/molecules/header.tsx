// Componente Header.tsx atualizado
import React from "react";
import { Styled } from "./header.styles";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: var(--color-background-header);
    padding: var(--padding-md);
    display: flex;
    justify-content: center;
    position: sticky;
`;

interface HeaderProps {
    items: string[];
}

const Header: React.FC<HeaderProps> = ({ items }) => {
    return (
        <HeaderWrapper>
            <Styled.List>
                {items.map((item, index) => (
                    <Styled.ListItem key={index}>
                        <Styled.Link
                            to={
                                item === "Inicio"
                                    ? "/"
                                    : `/${item.toLowerCase()}`
                            }
                            end={item === "Inicio"}
                        >
                            {item}
                        </Styled.Link>
                    </Styled.ListItem>
                ))}
            </Styled.List>
        </HeaderWrapper>
    );
};

export default Header;
