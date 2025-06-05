import React, { useState } from "react";
import styled from "styled-components";
import {
    useProductsTemporal,
    type ProductFilter,
} from "../hooks/use_products_temporal";
import { ProductList } from "../components/product_list";

const Container = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: var(--color-text);
`;

const FilterButton = styled.button<{ active: boolean }>`
    background-color: ${({ active }) =>
        active ? "var(--color-primary)" : "#e0e0e0"};
    border: none;
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;
    color: #fff;
`;

export const ProductsPage: React.FC = () => {
    const [filter, setFilter] = useState<ProductFilter>(null);

    const products = useProductsTemporal(true, filter);

    return (
        <Container>
            <Title>Produtos</Title>
            <div>
                <FilterButton
                    active={filter === null}
                    onClick={() => setFilter(null)}
                >
                    Padrão
                </FilterButton>
                <FilterButton
                    active={filter === "semanal"}
                    onClick={() => setFilter("semanal")}
                >
                    Semanal
                </FilterButton>
                <FilterButton
                    active={filter === "mensal"}
                    onClick={() => setFilter("mensal")}
                >
                    Mensal
                </FilterButton>
                <FilterButton
                    active={filter === "anual"}
                    onClick={() => setFilter("anual")}
                >
                    Anual
                </FilterButton>
            </div>
            {products.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                <ProductList products={products} />
            )}
        </Container>
    );
};
