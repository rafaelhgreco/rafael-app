import { create } from "zustand";
import type { Product } from "./../../domain/product";

type ProductStore = {
    products: Product[];
    setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}));
