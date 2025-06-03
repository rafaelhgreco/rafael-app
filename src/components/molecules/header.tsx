// Componente Header.tsx atualizado
import React from "react";
import { Styled } from "./header.styles";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: var(--color-background-header);
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    position: sticky; // Mantém o header no topo durante a rolagem
    top: 0;
    width: 100%; // Garante que ocupe toda a largura
    z-index: 1000; // Garante que fique acima de outros elementos
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
