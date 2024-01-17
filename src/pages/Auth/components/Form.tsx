// Utils
import { useRef, useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";
import { FaAt } from "react-icons/fa6";
import { selectAuthSlice } from "@/contexts/authSlice";
import { auth } from "@/configs/firebase";
import useChatNavigate from "@/hooks/useNavigateChat";

// Components
import ButtonGradiant from "@/components/ButtonGradiant";
import PasswordFeild from "./PasswordFeild";

export default function Form() {
    // Store Access
    const { formType } = useSelector(selectAuthSlice);

    const [user, _, error]: AuthStateHook = useAuthState(auth);
    const [formError, setFormError] = useState<boolean>(false);

    useChatNavigate(user || error ? true : false);

    const form = useRef<HTMLFormElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const createUserAccount = async function (e: FormEvent) {
        e.preventDefault();

        const userEmail = email.current?.value;
        const userPassword = password.current?.value;

        if (!userEmail || !userPassword) return;

        try {
            switch (formType) {
                case "SIGN IN":
                    await signInWithEmailAndPassword(
                        auth,
                        userEmail,
                        userPassword
                    );
                    break;

                case "SIGN UP":
                    await createUserWithEmailAndPassword(
                        auth,
                        userEmail,
                        userPassword
                    );
                    break;
            }

            form.current?.reset();
        } catch (err) {
            setFormError(true);
        } finally {
            return;
        }
    };

    return (
        <form
            ref={form}
            className="w-full flex flex-col justify-center items-center gap-8"
            onSubmit={createUserAccount}>
            <div
                className={`relative w-full flex flex-row-reverse justify-start items-center gap-2 p-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15);] ${
                    formError ? "border border-[rgba(255,0,0,.5)]" : ""
                }`}>
                <label htmlFor="email" className="fixed -left-full">
                    Email
                </label>
                <span
                    className={
                        formError
                            ? "absolute -top-1/2 left-0 text-[rgb(255,0,0)]"
                            : "fixed -left-full"
                    }>
                    Email Invalid
                </span>
                <input
                    ref={email}
                    type="email"
                    name="email"
                    id="email"
                    aria-label="Write your email."
                    className="w-full h-full font-medium text-dark-400 bg-light-200 caret-primary-300  placeholder:text-dark-100 peer focus:outline-none"
                    placeholder="Email"
                    required
                />

                <div className="w-[2px] h-6 bg-dark-100 peer-focus:bg-dark-400"></div>

                <FaAt className="w-8 aspect-square fill-dark-100 peer-focus:fill-dark-400" />
            </div>

            <PasswordFeild nodeRef={password} formError={formError} />

            <ButtonGradiant width="w-4/5" btnType="submit">
                {formType === "SIGN IN" ? "Sign In" : "Sign Up"}
            </ButtonGradiant>
        </form>
    );
}
