import { ProductRepository } from "../../infrastructure/repositories/product_repository";
import { useProductStore } from "../../infrastructure/stores/use_product_store";

export class ProductService {
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository;
    }

    fetchProducts() {
        return this.repository
            .getAllProducts()
            .then((products) => {
                // Atualiza a store com os produtos recebidos
                useProductStore.getState().setProducts(products);
                return products;
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                throw new Error(error.message);
            });
    }
}
