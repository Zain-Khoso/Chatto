// Utils
import { createContext } from "react";

// Types
import { formType, formTypeContext } from "@/types/authForm.types";

export const context = createContext<formTypeContext>({
    formType: "SIGN IN",
    formTypeReducer: () => {},
});

export const reducer = function (_: formType, action: formType): formType {
    switch (action) {
        case "SIGN IN":
            return "SIGN IN";

        case "SIGN UP":
            return "SIGN UP";
    }
};
