import { ProductRepository } from "../../infrastructure/repositories/product_repository";
import { useProductStore } from "../../infrastructure/stores/use_product_store";
import type { ProductFilter } from "../../hooks/use_products_temporal";
import type { Product } from "../../domain/product";

export class ProductService {
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository;
    }

    async fetchProducts(
        filter: ProductFilter = null,
        sortByPriceDescending: boolean = false
    ): Promise<Product[]> {
        return await this.repository
            .getAllProducts(filter)
            .then((products) => {
                const sortedProducts = sortByPriceDescending
                    ? [...products].sort((a, b) => b.price - a.price)
                    : products;
                useProductStore.getState().setProducts(sortedProducts);
                return sortedProducts;
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                throw new Error(error.message);
            });
    }
}
