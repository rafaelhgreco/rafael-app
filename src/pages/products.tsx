import React from "react";
import styled from "styled-components";
import { useProducts } from "../hooks/use_products";
import { ProductList } from "../components/product_list";

const Container = styled.div`
    padding: 20px;
`;

const Title = styled.h2`
    color: var(--color-text);
    margin-bottom: 20px;
    font-size: var(--font-size-title);
    text-align: center;
`;

export const ProductsPage: React.FC = () => {
    const products = useProducts(true);

    return (
        <Container>
            <Title>Produtos</Title>
            {products.length === 0 ? (
                <p>Carregando produtos...</p>
            ) : (
                <ProductList products={products} />
            )}
        </Container>
    );
};
