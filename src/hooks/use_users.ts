// src/hooks/use_users.ts
import { useEffect } from "react";
import { useUserStore } from "../infrastructure/stores/use_store";

export const useUsers = () => {
    const { users, isLoading, error, fetchUsers } = useUserStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return { users, isLoading, error };
};
