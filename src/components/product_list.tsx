import React from "react";
import type { Product } from "../domain/product";
import { ProductCard } from "./product_card";
import { Styled } from "./product_list.styles";

type ProductListProps = {
    products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => (
    <Styled.List>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </Styled.List>
);
