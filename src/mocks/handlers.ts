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

export const handlers = [
    http.get("/api/users", () => {
        console.log("MSW: Intercepted /api/users request");
        return HttpResponse.json(mockUsers);
    }),
    http.get("/api/products", () => {
        console.log("MSW: Intercepted /api/products request");
        return HttpResponse.json(mockProducts);
    }),
];
