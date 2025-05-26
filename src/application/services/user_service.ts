import { useUserStore } from "../../infrastructure/stores/use_store";

export const useUserService = () => {
    const { users, isLoading, error, fetchUsers } = useUserStore();

    const getAllUsers = async () => {
        await fetchUsers();
    };

    return { users, isLoading, error, getAllUsers };
};
