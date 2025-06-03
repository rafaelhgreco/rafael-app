import { getUsers } from "../api_client";
import type { User } from "../../domain/user";

export const userRepository = {
    getUsersData: async (): Promise<User[]> => {
        return await getUsers();
    },
};
