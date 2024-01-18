// Utils
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setFormTo } from "@/contexts/formSlice";

// Types
import { FormType } from "@/types/formSlice.types";

export default function useFormType(type: FormType) {
    // Store Access
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (type === "SIGN IN") dispatch(setFormTo("SIGN IN"));
        else dispatch(setFormTo("SIGN UP"));
    }, []);

    return;
}
