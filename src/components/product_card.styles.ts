import styled from "@emotion/styled";
import { Card } from "./atoms/card";

const ProductName = styled.h2`
    margin: 0 0 5px;
    font-size: 1.2rem;
`;

const ProductPrice = styled.p`
    margin: 0;
    color: #555;
`;

const Container = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 20%;
`;

export const Styled = {
    ProductName,
    ProductPrice,
    Container,
};
