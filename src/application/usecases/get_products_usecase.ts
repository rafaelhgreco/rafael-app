import type { Product } from "../../domain/product";
import { ProductService } from "../services/product_service";

export class GetProductsUseCase {
    private service: ProductService;
    constructor(service: ProductService) {
        this.service = service;
    }

    async execute(sortByPriceDescending: boolean = false): Promise<Product[]> {
        // Busca os produtos através do serviço
        const products = await this.service.fetchProducts();

        //Se a flag de ordenação estiver ativa, clonamos o array de produtos usando o spread operator ([...products]) para não modificar o array original.
        if (sortByPriceDescending) {
            // Clona o array para evitar side-effects e ordena do mais caro para o mais barato
            const sortedProducts = [...products].sort(
                (a, b) => b.price - a.price
            );
            console.log("Produtos ordenados:", sortedProducts);
            return sortedProducts;
        }
        return products;
    }
}
