// Utils
import { FaArrowLeft } from "react-icons/fa";
import useNavigateHome from "@/hooks/useNavigateHome";

// Components
import User from "./User";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/configs/firebase";
import Spinner from "@/components/Spinner";
import Writer from "./Writer";

export default function Messages() {
    const [user, isLoading, error] = useAuthState(auth);

    if (error) useNavigateHome(user ? true : false);

    return (
        <div className="w-dvw h-dvh flex flex-col">
            <header className="w-full flex justify-start items-center gap-2 bg-light-200 py-2 px-4">
                <FaArrowLeft size={30} />
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
