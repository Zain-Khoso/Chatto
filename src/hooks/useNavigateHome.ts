// Utils
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function (isAuthenticated: boolean) {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (isAuthenticated) navigate("/home");
    }, [isAuthenticated]);
}
