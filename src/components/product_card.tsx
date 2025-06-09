import React from "react";
import type { Product } from "../domain/product";
import { Styled } from "./product_card.styles";

type ProductCardProps = {
    product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <Styled.Container className={product.topRated ? "top-rated" : ""}>
        <Styled.ProductName>{product.name}</Styled.ProductName>
        <Styled.ProductPrice>R$ {product.price.toFixed(2)}</Styled.ProductPrice>
    </Styled.Container>
);
