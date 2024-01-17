// Utils
import { configureStore } from "@reduxjs/toolkit";

// Slices
import { AuthReducer } from "@/contexts/authSlice";

export default configureStore({
    reducer: {
        auth: AuthReducer,
    },
});
