// Utils
import { configureStore } from "@reduxjs/toolkit";

// Slices
import { AuthReducer } from "@/contexts/formSlice";

export default configureStore({
    reducer: {
        auth: AuthReducer,
    },
});
