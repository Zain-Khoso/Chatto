// Utils
import { useContext, useRef, useLayoutEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../configs/firebase";
import { FaAt } from "react-icons/fa6";
import { context as formTypeContext } from "@/contexts/authFormType";

// Components
import ButtonGradiant from "@/components/ButtonGradiant";
import PasswordFeild from "./PasswordFeild";

export default function Form() {
    const { formType } = useContext(formTypeContext);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const form = useRef<HTMLFormElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const createUserAccount = async function (e: FormEvent) {
        e.preventDefault();

        const userEmail = email.current?.value;
        const userPassword = password.current?.value;

        if (!userEmail || !userPassword) return;

        if (formType === "SIGN IN") {
            try {
                await signInWithEmailAndPassword(auth, userEmail, userPassword);
            } catch (err) {
                alert("Email or password incorrect");
            } finally {
                return;
            }
        }

        try {
            await createUserWithEmailAndPassword(auth, userEmail, userPassword);
        } catch (err) {
            alert("Email or password invalid");
        } finally {
            form.current?.reset();
        }
    };

    useLayoutEffect(() => {
        if (user) navigate("/");
    }, [user]);

    return (
        <form
            ref={form}
            className="w-full flex flex-col justify-center items-center gap-6"
            onSubmit={createUserAccount}>
            <div className="w-full flex flex-row-reverse justify-start items-center gap-2 p-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15);]">
                <label htmlFor="email" className="fixed -left-full">
                    Email
                </label>
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

            <PasswordFeild nodeRef={password} />

            <ButtonGradiant width="w-4/5" btnType="submit">
                {formType === "SIGN IN" ? "Sign In" : "Sign Up"}
            </ButtonGradiant>
        </form>
    );
}
