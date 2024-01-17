// Utils
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export default function (isAuthenticated: boolean) {
    useLayoutEffect(() => {
        if (isAuthenticated) navigate("/");
    }, [isAuthenticated]);
}
