import { ISession } from "@entities/session/models";
import { create } from "zustand";

type Store = {
    session: ISession | null;
    loading: boolean;
    setAuthUser: (session: ISession | null) => void;
    setLoading: (isLoading: boolean) => void;
};

export const useSessionStore = create<Store>((set) => ({
    session: null,
    loading: false,
    setAuthUser: (user) => set((state) => ({ ...state, session: user })),
    setLoading: (isLoading) => set((state) => ({ ...state, loading: isLoading })),
}));
