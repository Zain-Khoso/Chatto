// Utils
import { createBrowserRouter } from "react-router-dom";

// Components
import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import SignIn from "@/pages/Auth/components/SignIn";
import SignUp from "@/pages/Auth/components/SignUp";

// Router Setup
export default createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/user",
        element: <Auth />,
        children: [
            {
                path: "sign-in",
                element: <SignIn />,
            },
            {
                path: "sign-up",
                element: <SignUp />,
            },
        ],
    },
]);
