import type { Product } from "../domain/product";
import type { User } from "../domain/user";

const BASE_URL = "/api";

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${BASE_URL}/users`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${BASE_URL}/products`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getProductsTemporal = (
    filter: string | null = null
): Promise<Product[]> => {
    const url = new URL("/api/products", window.location.origin);
    if (filter) {
        url.searchParams.append("filter", filter);
    }
    return fetch(url.toString())
        .then((response) => response.json())
        .catch((error) => {
            console.error("Erro na chamada da API:", error);
            throw error;
        });
};
