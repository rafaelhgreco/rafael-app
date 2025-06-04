import styled from "@emotion/styled";

const Card = styled.div`
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    border-left: 4px solid transparent;
    width: 20%;
    &.top-rated {
        border-left-color: var(--color-primary);
    }
`;

const ProductName = styled.h2`
    margin: 0 0 5px;
    font-size: 1.2rem;
`;

const ProductPrice = styled.p`
    margin: 0;
    color: #555;
`;

export const Styled = {
    Card,
    ProductName,
    ProductPrice,
};
