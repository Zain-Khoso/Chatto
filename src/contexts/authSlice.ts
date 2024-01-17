// Utils
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { RootState } from "@/types";
import { InitialState, FormType } from "@/types/authSlice.types";

// Initial Slice State.
const initialState: InitialState = {
    value: {
        formType: "SIGN IN",
    },
};

// Store State Slice.
const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setFormTo(state, action: PayloadAction<FormType>) {
            state.value.formType = action.payload;
        },
    },
});

// A function which will help us select this slice of state.
export const selectAuthSlice = (state: RootState) => state.auth.value;

export const { setFormTo } = slice.actions;

export const AuthReducer = slice.reducer;
