import { useUserService } from "../services/user_service";
import { useEffect } from "react";

export const useUserController = () => {
    const { users, isLoading, error, getAllUsers } = useUserService();

    useEffect(() => {
        getAllUsers();
    }, []);

    return { users, isLoading, error };
};
