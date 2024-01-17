import store from "@/configs/store";

export type RootState = ReturnType<typeof store.getState>;

export type User = {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
};
