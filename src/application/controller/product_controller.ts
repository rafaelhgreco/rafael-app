import type { GetProductsUseCase } from "../usecases/get_products_usecase";

export class ProductController {
    private getProductsUseCase: GetProductsUseCase;
    constructor(getProductsUseCase: GetProductsUseCase) {
        this.getProductsUseCase = getProductsUseCase;
    }

    async fetchProducts(sortByPriceDescending: boolean = false) {
        return await this.getProductsUseCase.execute(sortByPriceDescending);
    }
}
