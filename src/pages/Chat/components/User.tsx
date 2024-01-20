// Utils
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUser } from "react-icons/fa6";
import { auth } from "@/configs/firebase";
import useCharacterLimit from "@/hooks/useCharacterLimit";

export default function User() {
    const [user, isLoading, error] = useAuthState(auth);

    if (isLoading || error)
        return (
            <div className="w-fit flex justify-center items-center gap-2 p-2">
                <FaUser className="w-10 aspect-square fill-dark-300 rounded-full" />
                <span className="text-xl text-dark-400 font-bold">
                    {error ? "Can't Login" : "Loading..."}
                </span>
            </div>
        );

    return (
        <div className="w-fit flex justify-center items-center gap-2 p-2">
            {user?.photoURL ? (
                <img
                    src={user.photoURL}
                    alt={`Profile picture of ${user.displayName || user.email}`}
                    className="w-10 aspect-square fill-dark-300 rounded-full"
                />
            ) : (
                <FaUser className="w-10 aspect-square fill-dark-300 rounded-full" />
            )}
            <span className="text-xl text-dark-400 font-bold">
                {user?.displayName
                    ? useCharacterLimit(user.displayName)
                    : useCharacterLimit(user?.email)}
            </span>
        </div>
    );
}
