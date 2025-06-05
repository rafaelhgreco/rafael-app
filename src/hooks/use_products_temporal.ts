import { useEffect, useMemo } from "react";
import type { Product } from "../domain/product";
import { useProductStore } from "../infrastructure/stores/use_product_store";
import { ProductController } from "../application/controller/product_controller";
import { GetProductsUseCase } from "../application/usecases/get_products_usecase";
import { ProductRepository } from "../infrastructure/repositories/product_repository";
import { ProductService } from "../application/services/product_service";

// Extendendo a tipagem para filtros válidos
export type ProductFilter = "semanal" | "mensal" | "anual" | null;

export const useProductsTemporal = (
    sortByPriceDescending: boolean = false,
    filter: ProductFilter = null
): Product[] => {
    const products = useProductStore((state) => state.products);

    const controller = useMemo(() => {
        const repository = new ProductRepository();
        const service = new ProductService(repository);
        const useCase = new GetProductsUseCase(service);
        return new ProductController(useCase);
    }, []);

    useEffect(() => {
        // Aqui, o controller pode ser modificado para ler o filtro e ajustá-lo na requisição.
        // Uma estratégia é criar um endpoint que aceite ?filter=... na query string.
        // Assim, o repository já recupera os dados filtrados pelo MSW.
        controller
            .fetchProducts(sortByPriceDescending, filter)
            .catch((error) => {
                console.error("Error fetching products in hook:", error);
            });
    }, [controller, sortByPriceDescending, filter]);

    return products;
};
