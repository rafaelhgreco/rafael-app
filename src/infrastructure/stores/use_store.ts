import { create } from "zustand";
import type { User } from "../../domain/user";
import { userRepository } from "../repositories/user_repository";

interface UserState {
    users: User[];
    isLoading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => {
    return {
        users: [],
        isLoading: false,
        error: null,
        fetchUsers: async () => {
            set({ isLoading: true, error: null });
            try {
                const users = await userRepository.getUsersData();
                set({ users, isLoading: false });
            } catch (error: any) {
                set({ error: error.message, isLoading: false });
            }
        },
    };
});
