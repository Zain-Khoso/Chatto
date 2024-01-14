// Utils
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SignInForm } from "./contexts";

export default function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <SignInForm.Provider value={{ isSignIn, setIsSignIn }}>
            <Outlet />
        </SignInForm.Provider>
    );
}
