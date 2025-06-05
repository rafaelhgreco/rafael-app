import type { Product } from "../../domain/product";
import { ProductService } from "../services/product_service";
import type { ProductFilter } from "../../hooks/use_products_temporal";
import { useProductStore } from "../../infrastructure/stores/use_product_store";

export class GetProductsUseCase {
    private service: ProductService;
    constructor(service: ProductService) {
        this.service = service;
    }

    getProducts(
        sortByPriceDescending: boolean = false,
        filter: ProductFilter = null
    ): Promise<Product[]> {
        return this.service.fetchProducts(filter).then((products) => {
            // inicialmente recebe um valor e pode ser reatribuída se a flag sortByPriceDescending for verdadeira.
            let ordered = products;
            if (sortByPriceDescending) {
                ordered = [...products].sort((a, b) => b.price - a.price);
            }
            // Atualiza a store com a lista ordenada
            useProductStore.getState().setProducts(ordered);
            return ordered;
        });
    }
}
