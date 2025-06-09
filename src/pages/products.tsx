import React, { useState } from "react";
import styled from "styled-components";
import {
    useProductsTemporal,
    type ProductFilter,
} from "../hooks/use_products_temporal";
import { ProductList } from "../components/product_list";
import { BasicButton } from "../components/atoms/button/button";

const Container = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: var(--color-text);
`;

export const ProductsPage: React.FC = () => {
    const [filter, setFilter] = useState<ProductFilter>(null);

    const products = useProductsTemporal(true, filter);

    return (
        <Container>
            <Title>Produtos</Title>

            <div style={{ display: "flex", gap: "10px" }}>
                <BasicButton
                    onClick={() => setFilter(null)}
                    variant="primary"
                    size="small"
                    label={"Filtro Padrão"}
                />
                <BasicButton
                    onClick={() => setFilter("semanal")}
                    variant="secondary"
                    size="small"
                    label={"Filtro Semanal"}
                />
                <BasicButton
                    onClick={() => setFilter("mensal")}
                    variant={filter === "mensal" ? "primary" : "secondary"} // ternario
                    size="small"
                    label={"Filtro Mensal"}
                />
                <BasicButton
                    onClick={() => setFilter("anual")}
                    variant="secondary"
                    size="small"
                    label={"Filtro Anual"}
                />
            </div>

            {products.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                <ProductList products={products} />
            )}
        </Container>
    );
};
