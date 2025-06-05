import type { Product } from "../../domain/product";
import type { ProductFilter } from "../../hooks/use_products_temporal";
import { getProductsTemporal } from "../api_client";

export class ProductRepository {
    async getAllProducts(filter: ProductFilter = null): Promise<Product[]> {
        return getProductsTemporal(filter);
    }
}
