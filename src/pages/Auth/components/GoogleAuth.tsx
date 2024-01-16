// Utils
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "@/configs/firebase";

// Assets
import GoogleLogo from "@/assets/svgs/google.svg";

// Components
import ButtonDark from "@/components/ButtonDark";

export default function GoogleAuth() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const signInWithGoogle = async function () {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error("Can't sign in with google at the moment.");
        }
    };

    useLayoutEffect(() => {
        if (user) navigate("/");
    }, [user]);

    return (
        <ButtonDark handleClick={signInWithGoogle}>
            <img src={GoogleLogo} alt="Google Colored Logo" />
            Continue With Google
        </ButtonDark>
    );
}
