// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "@/components/Spinner";
import Error from "@/components/Error";

// Components
const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));
const SignIn = lazy(() => import("@/pages/Auth/components/SignIn"));
const SignUp = lazy(() => import("@/pages/Auth/components/SignUp"));
const Chat = lazy(() => import("@/pages/Chat"));

// Router Setup
export default createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Spinner />}>
                <Chat />
            </Suspense>
        ),
        errorElement: <Error />,
    },
    {
        path: "/home",
        element: (
            <Suspense fallback={<Spinner />}>
                <Home />
            </Suspense>
        ),
        errorElement: <Error />,
    },
    {
        path: "/user",
        element: (
            <Suspense fallback={<Spinner />}>
                <Auth />
            </Suspense>
        ),
        errorElement: <Error />,
        children: [
            {
                path: "sign-in",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <SignIn />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "sign-up",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <SignUp />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
        ],
    },
]);
