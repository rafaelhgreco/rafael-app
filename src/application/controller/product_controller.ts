import type { GetProductsUseCase } from "../usecases/get_products_usecase";
import type { ProductFilter } from "../../hooks/use_products_temporal";

export class ProductController {
    private getProductsUseCase: GetProductsUseCase;
    constructor(getProductsUseCase: GetProductsUseCase) {
        this.getProductsUseCase = getProductsUseCase;
    }

    fetchProducts(
        sortByPriceDescending: boolean = false,
        filter: ProductFilter = null
    ) {
        return this.getProductsUseCase.getProducts(
            sortByPriceDescending,
            filter
        );
    }
}
