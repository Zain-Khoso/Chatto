// Utils
import { signInWithPopup } from "firebase/auth";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "@/configs/firebase";
import useChatNavigate from "@/hooks/useNavigateChat";

// Assets
import GoogleLogo from "@/assets/svgs/google.svg";

// Components
import ButtonDark from "@/components/ButtonDark";

export default function GoogleAuth() {
    const [user]: AuthStateHook = useAuthState(auth);

    useChatNavigate(user ? true : false);

    const signInWithGoogle = async function () {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error("Can't sign in with google at the moment.");
        }
    };

    return (
        <ButtonDark handleClick={signInWithGoogle}>
            <img src={GoogleLogo} alt="Google Colored Logo" />
            Continue With Google
        </ButtonDark>
    );
}
