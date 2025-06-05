import { http, HttpResponse } from "msw";
import type { User } from "../domain/user";
import type { Product } from "../domain/product";

const mockUsers: User[] = [
    { id: "1", name: "John Doe", email: "john.doe@example.com" },
    { id: "2", name: "Jane Smith", email: "jane.smith@example.com" },
];

const mockProducts: Product[] = [
    { id: "101", name: "Produto A", price: 29.99, topRated: true },
    { id: "102", name: "Produto B", price: 19.99, topRated: false },
    { id: "103", name: "Produto C", price: 39.99, topRated: true },
];

const mockProductsSemanal: Product[] = [
    { id: "201", name: "Produto Semanal 1", price: 25.99, topRated: false },
    { id: "202", name: "Produto Semanal 2", price: 35.99, topRated: true },
];

const mockProductsMensal: Product[] = [
    { id: "301", name: "Produto Mensal 1", price: 45.99, topRated: true },
    { id: "302", name: "Produto Mensal 2", price: 15.99, topRated: false },
    { id: "303", name: "Produto Mensal 3", price: 17.99, topRated: false },
];

const mockProductsAnual: Product[] = [
    { id: "401", name: "Produto Anual 1", price: 55.99, topRated: true },
    { id: "402", name: "Produto Anual 2", price: 29.99, topRated: false },
    { id: "403", name: "Produto Anual 3", price: 60.99, topRated: true },
];

export const handlers = [
    http.get("/api/users", (req) => {
        console.log("MSW: Intercepted /api/users request");
        return HttpResponse.json(mockUsers);
    }),

    http.get("/api/products", (req) => {
        console.log("MSW: Intercepted /api/products request");

        // Recupera o valor do parâmetro "filter" da query string
        const url = new URL(req.request.url);
        const filter = url.searchParams.get("filter");

        // Se um filtro for especificado, retorne o mock correspondente
        if (filter === "semanal") {
            return HttpResponse.json(mockProductsSemanal);
        }
        if (filter === "mensal") {
            return HttpResponse.json(mockProductsMensal);
        }
        if (filter === "anual") {
            return HttpResponse.json(mockProductsAnual);
        }

        // Caso não exista filtro, retorne o mock padrão
        return HttpResponse.json(mockProducts);
    }),
];
