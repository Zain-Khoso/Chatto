// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";

// Components
const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));
const SignIn = lazy(() => import("@/pages/Auth/components/SignIn"));
const SignUp = lazy(() => import("@/pages/Auth/components/SignUp"));

// Router Setup
export default createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Spinner />}>
                <Home />
            </Suspense>
        ),
    },
    {
        path: "/user",
        element: (
            <Suspense fallback={<Spinner />}>
                <Auth />
            </Suspense>
        ),
        children: [
            {
                path: "sign-in",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <SignIn />
                    </Suspense>
                ),
            },
            {
                path: "sign-up",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <SignUp />
                    </Suspense>
                ),
            },
        ],
    },
]);
