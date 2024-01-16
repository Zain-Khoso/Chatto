// Utils
import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import {
    context as AuthFormType,
    reducer as changeAuthFormType,
} from "@/contexts/authFormType";

export default function Auth() {
    const [formType, formTypeReducer] = useReducer(
        changeAuthFormType,
        "SIGN IN"
    );

    return (
        <AuthFormType.Provider value={{ formType, formTypeReducer }}>
            <Outlet />
        </AuthFormType.Provider>
    );
}
