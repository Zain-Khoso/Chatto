// Utils
import { useContext, useLayoutEffect } from "react";
import { context } from "@/contexts/authFormType";

// Types
import { formType } from "@/types/authForm.types";

export default function useFormType(type: formType) {
    const { formTypeReducer } = useContext(context);

    useLayoutEffect(() => {
        if (type === "SIGN IN") formTypeReducer("SIGN IN");
        else formTypeReducer("SIGN UP");
    }, []);

    return;
}
