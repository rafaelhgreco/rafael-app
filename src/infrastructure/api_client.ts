import type { User } from "../domain/user";

const BASE_URL = "/api"; // MSW intercepts requests to this URL

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as User[];
};
