// Utils
import { useContext, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../configs/firebase";
import { FaAt } from "react-icons/fa6";
import { SignInForm } from "../contexts";

// Components
import ButtonGradiant from "../../../components/ButtonGradiant";
import PasswordFeild from "./PasswordFeild";

export default function Form() {
    const { isSignIn } = useContext(SignInForm);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const form = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    useLayoutEffect(() => {
        if (user) navigate("/");
    }, [user]);

    const createUserAccount = async function (e) {
        e.preventDefault();

        const userEmail = email.current.value;
        const userPassword = password.current.value;

        if (isSignIn) {
            try {
                await signInWithEmailAndPassword(auth, userEmail, userPassword);
            } catch (err) {
                alert("Email or password incorrect");
            }

            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, userEmail, userPassword);
        } catch (err) {
            alert("Email or password invalid");
        } finally {
            form.current.reset();
        }
    };

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

            <ButtonGradiant width="w-4/5" type="submit">
                {isSignIn ? "Sign In" : "Sign Up"}
            </ButtonGradiant>
        </form>
    );
}
