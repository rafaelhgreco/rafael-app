import type { Product } from "../../domain/product";
import { ProductRepository } from "../../infrastructure/repositories/product_repository";
import { useProductStore } from "../../infrastructure/stores/use_product_store";

export class ProductService {
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository;
    }

    async fetchProducts(): Promise<Product[]> {
        try {
            const products = await this.repository.getAllProducts();
            useProductStore.getState().setProducts(products);
            return products;
        } catch (error: any) {
            console.error("Error fetching products:", error);
            throw new Error(error.message);
        }
    }
}
