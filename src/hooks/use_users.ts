import { useUserController } from "../application/controller/user_controller";

export const useUsers = () => {
    return useUserController();
};
