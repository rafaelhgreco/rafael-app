import type { User } from "../../domain/user";
import { getUsers } from "../api_client";

export const useUserRepository = () => {
    const getUsersData = async (): Promise<User[]> => {
        return await getUsers();
    };

    return { getUsersData };
};
