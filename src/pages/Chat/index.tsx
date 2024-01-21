// Utils
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/configs/firebase";
import useNavigateHome from "@/hooks/useNavigateHome";

// Components
import SideNav from "./components/SideNav";
import Messages from "./components/Messages";

export default function Chat() {
    const [user, _, error] = useAuthState(auth);

    useNavigateHome(!user || error ? true : false);

    return (
        <>
            <SideNav />

            <Messages />
        </>
    );
}
