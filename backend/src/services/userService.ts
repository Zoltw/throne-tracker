import { User } from "../models/user";

export const createUser = async (userData: typeof User): Promise<typeof User> => {
    return {} as typeof User;
};

export const loginUser = async (email: string, password: string): Promise<typeof User | null> => {
    return {} as typeof User;
};

export const getUser = async (userId: string): Promise<typeof User | null> => {
    return {} as typeof User;
};

export const updateUser = async (userId: string, userData: typeof User): Promise<typeof User | null> => {
    return {} as typeof User;
};

export const deleteUser = async (userId: string): Promise<void> => {
    return {} as unknown as void;
};
