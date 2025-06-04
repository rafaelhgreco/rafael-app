// src/infrastructure/repositories/product_repository.ts
import type { Product } from "../../domain/product";
import { getProducts } from "../api_client";

export class ProductRepository {
    async getAllProducts(): Promise<Product[]> {
        try {
            const products = await getProducts();
            return products;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }
}
