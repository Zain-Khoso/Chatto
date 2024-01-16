// Utils
import { useState } from "react";
import { signOut } from "firebase/auth";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import { FaUser, FaPhotoFilm, FaUserMinus } from "react-icons/fa6";
import { auth } from "../configs/firebase";

// Components
import DisplayBlanket from "./DisplayBlanket";

export default function User() {
    const [dropDown, setDropDown] = useState<boolean>(false);
    const [showPfp, setShowPfp] = useState<boolean>(false);
    const [user]: AuthStateHook = useAuthState(auth);

    const makePfpLarge = function () {
        setDropDown(false);
        setShowPfp(true);
    };

    const redirectSignOut = async function () {
        try {
            await signOut(auth);
        } catch {
            console.error("Cannot sign you out of the account at the moment");
        }
    };

    return (
        <>
            <div className={`relative min-w-32 z-10}`}>
                <div
                    className={`flex justify-center items-center gap-2 bg-[rgba(0,0,0,0.1)] p-2 rounded-t-md ${
                        !dropDown && "bg-transparent"
                    } z-10 hover:cursor-pointer`}
                    onClick={() => setDropDown(!dropDown)}>
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User profile picture"
                            className={`w-8 aspect-square rounded-[50%] ${
                                showPfp &&
                                "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] !w-2/5 z-40"
                            }`}
                            onClick={() => setShowPfp(false)}
                        />
                    ) : (
                        <FaUser
                            className={`w-8 aspect-square rounded-[50%] ${
                                showPfp &&
                                "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] !w-2/5 !h-2/5 aspect-square z-40"
                            }`}
                            onClick={() => setShowPfp(false)}
                        />
                    )}
                    <h3 className={`text-dark-400 font-bold`}>
                        {user?.displayName
                            ? user?.displayName
                            : user?.email && user.email.length > 10
                            ? user?.email.slice(0, 10) + "..."
                            : user?.email}
                    </h3>

                    <DisplayBlanket
                        show={showPfp}
                        handleClick={() => setShowPfp(false)}
                    />
                </div>

                <div
                    className={`absolute top-[100%] flex flex-col justify-center items-start gap-2 min-w-full bg-[rgba(0,0,0,0.1)] p-2 rounded-b-md border-t border-dark-300 pt-4 ${
                        !dropDown && "hidden"
                    }`}>
                    <button
                        className="flex justify-start items-center gap-2 text-dark-400 font-medium"
                        onClick={makePfpLarge}>
                        <FaPhotoFilm className="fill-dark-400" /> View Profile
                    </button>
                    <button
                        className="flex justify-start items-center gap-2 text-dark-400 font-medium"
                        onClick={redirectSignOut}>
                        <FaUserMinus className="fill-dark-400" /> Sign Out
                    </button>
                </div>
            </div>
        </>
    );
}
