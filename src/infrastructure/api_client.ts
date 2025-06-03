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
