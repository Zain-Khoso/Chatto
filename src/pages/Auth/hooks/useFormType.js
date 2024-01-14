// Utils
import { useContext, useLayoutEffect } from "react";
import { SignInForm } from "../contexts";

export default function useFormType(type) {
    const { setIsSignIn } = useContext(SignInForm);

    useLayoutEffect(() => {
        if (type === "signin") setIsSignIn(true);
        else setIsSignIn(false);
    }, []);

    return;
}
