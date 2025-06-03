import React from "react";
import { Styled } from "./header.styles";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: var(--color-background-header);
    padding: 10px 20px;
    display: flex;
    justify-content: center;
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
                        <Styled.Link href={`/${item.toLowerCase()}`}>
                            {item}
                        </Styled.Link>
                    </Styled.ListItem>
                ))}
            </Styled.List>
        </HeaderWrapper>
    );
};

export default Header;
