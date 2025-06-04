import React from "react";
import styled from "styled-components";
import type { Product } from "../domain/product";
import { ProductCard } from "./product_card";

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

type ProductListProps = {
    products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => (
    <List>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </List>
);
