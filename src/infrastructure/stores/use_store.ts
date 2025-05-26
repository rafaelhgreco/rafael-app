// src/infrastructure/stores/user_store.ts
import { create } from "zustand";
import type { User } from "../../domain/user";
import { useUserRepository } from "../repositories/user_repository";

interface UserState {
    users: User[];
    isLoading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => {
    const { getUsersData } = useUserRepository();

    return {
        users: [],
        isLoading: true,
        error: null,
        fetchUsers: async () => {
            set({ isLoading: true, error: null });
            try {
                const users = await getUsersData();
                set({ users: users, isLoading: false });
            } catch (error: any) {
                set({ error: error.message, isLoading: false });
            }
        },
    };
});
