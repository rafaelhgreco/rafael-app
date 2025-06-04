// src/hooks/useProducts.ts
import { useEffect, useMemo } from "react";
import type { Product } from "../domain/product";
import { useProductStore } from "../infrastructure/stores/use_product_store";
import { ProductController } from "../application/controller/product_controller";
import { GetProductsUseCase } from "../application/usecases/get_products_usecase";
import { ProductRepository } from "../infrastructure/repositories/product_repository";
import { ProductService } from "../application/services/product_service";

export const useProducts = (
    sortByPriceDescending: boolean = false
): Product[] => {
    const products = useProductStore((state) => state.products);

    const controller = useMemo(() => {
        const repository = new ProductRepository();
        const service = new ProductService(repository);
        const getProductsUseCase = new GetProductsUseCase(service);
        return new ProductController(getProductsUseCase);
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await controller.fetchProducts(
                    sortByPriceDescending
                );
                useProductStore.getState().setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [controller, sortByPriceDescending]);

    return products;
};
