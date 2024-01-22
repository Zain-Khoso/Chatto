// Utils
import React, { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { auth, firestore } from "@/configs/firebase";

export default function Writer() {
    const [user] = useAuthState(auth);
    const messages = collection(firestore, "messages");

    const msgEntry = useRef<HTMLInputElement | null>(null);

    const addMesssage = function (event: React.SyntheticEvent) {
        event.preventDefault();

        if (msgEntry.current?.value.trim().length === 0) return;

        addDoc(messages, {
            uid: user?.uid,
            photo: user?.photoURL,
            text: msgEntry.current?.value,
        });

        if (msgEntry.current) msgEntry.current.value = "";
    };

    return (
        <form
            onSubmit={addMesssage}
            className="fixed left-0 bottom-0 flex justify-center items-center gap-4 w-dvw max-h-16 bg-primary-100 p-2 rounded-t-lg">
            <div className="flex-1 flex justify-center items-center gap-2 h-full bg-light-200 p-2 rounded-lg">
                <label htmlFor="messageInput" className="fixed -left-full">
                    Type Your Message here
                </label>
                <input
                    ref={msgEntry}
                    type="text"
                    id="messageInput"
                    placeholder="Type Message..."
                    className="flex-1 bg-transparent font-medium text-dark-400 focus:outline-none placeholder:font-medium placeholder:text-dark-100"
                />
                <label htmlFor="send">
                    <FaRegArrowAltCircleRight
                        size={20}
                        className="fill-dark-400"
                        role="button"
                        type="submit"
                    />
                </label>
                <input
                    type="submit"
                    value="Send"
                    id="send"
                    className="fixed -left-full"
                />
            </div>
        </form>
    );
}
