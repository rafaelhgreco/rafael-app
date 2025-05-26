import { http, HttpResponse } from "msw";
import type { User } from "../domain/user";

const mockUsers: User[] = [
    { id: "1", name: "John Doe", email: "john.doe@example.com" },
    { id: "2", name: "Jane Smith", email: "jane.smith@example.com" },
];

export const handlers = [
    http.get("/api/users", () => {
        console.log("MSW: Intercepted /api/users request");
        return HttpResponse.json(mockUsers);
    }),
];
