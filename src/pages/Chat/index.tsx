// Utils
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/configs/firebase";
import useNavigateHome from "@/hooks/useNavigateHome";
import { FaArrowLeft } from "react-icons/fa";

// Components
import User from "./components/User";
import Message from "./components/Message";
import Writer from "./components/Writer";
import Spinner from "@/components/Spinner";
import { Link } from "react-router-dom";

export default function Chat() {
    const [user, isLoading, error] = useAuthState(auth);

    useNavigateHome(isLoading ? false : !user || error ? true : false);

    return (
        <div className="w-dvw h-dvh flex flex-col">
            <header className="w-full flex justify-start items-center gap-2 bg-light-200 py-2 px-4">
                <Link to="/home">
                    <FaArrowLeft size={30} />
                </Link>
                <User />
            </header>

            <main className="relative w-full h-full flex-1 flex flex-col-reverse gap-4 px-4 pb-16">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Message
                        type="SENDING"
                        photo={user?.photoURL}
                        text="Some message you will want to read But you cant read am just checkto see that everything is working as aspected and if not i will try and fix it."
                    />
                )}

                <Writer />
            </main>
        </div>
    );
}
