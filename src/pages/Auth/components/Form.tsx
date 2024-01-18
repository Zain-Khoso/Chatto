// Utils
import { useRef } from "react";
import { useSelector } from "react-redux";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaAt } from "react-icons/fa6";
import { selectAuthSlice } from "@/contexts/authSlice";
import { auth } from "@/configs/firebase";
import useChatNavigate from "@/hooks/useNavigateChat";

// Props
import { FormFields } from "@/types/authForm.types";

// Components
import ButtonGradiant from "@/components/ButtonGradiant";
import PasswordFeild from "./PasswordFeild";

export default function Form() {
    // Store Access
    const { formType } = useSelector(selectAuthSlice);

    const [user, _, error]: AuthStateHook = useAuthState(auth);

    const form = useRef<HTMLFormElement>(null);

    useChatNavigate(user || error ? true : false);

    // React Hook Form Setup
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = async function (data) {
        try {
            switch (formType) {
                case "SIGN IN":
                    await signInWithEmailAndPassword(
                        auth,
                        data.email,
                        data.password
                    );
                    break;

                case "SIGN UP":
                    await createUserWithEmailAndPassword(
                        auth,
                        data.email,
                        data.password
                    );
                    break;
            }
            form.current?.reset();
        } catch {
            setError("root", { message: "This email is already in use." });
        }
    };

    return (
        <form
            ref={form}
            className="w-full flex flex-col justify-center items-center gap-8"
            onSubmit={handleSubmit(onSubmit)}>
            <div
                className={`relative w-full flex flex-row-reverse justify-start items-center gap-2 p-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15);] ${
                    errors.root || errors.email
                        ? "border border-[rgba(255,0,0,.5)]"
                        : ""
                }`}>
                <label htmlFor="email" className="fixed -left-full">
                    Email
                </label>
                <span
                    className={
                        errors.email
                            ? "absolute -top-1/2 left-0 text-[rgb(255,0,0)]"
                            : "fixed -left-full"
                    }>
                    {errors.email?.message}
                </span>
                <input
                    type="email"
                    id="email"
                    aria-label="Write your email."
                    {...register("email", {
                        required: "You must have to provide an email.",
                    })}
                    className="w-full h-full font-medium text-dark-400 bg-light-200 caret-primary-300  placeholder:text-dark-100 peer focus:outline-none"
                    placeholder="Email"
                />

                <div className="w-[2px] h-6 bg-dark-100 peer-focus:bg-dark-400"></div>

                <FaAt className="w-8 aspect-square fill-dark-100 peer-focus:fill-dark-400" />
            </div>

            <PasswordFeild register={register} errors={errors} />

            <ButtonGradiant width="w-4/5" btnType="submit">
                {formType === "SIGN IN" ? "Sign In" : "Sign Up"}
            </ButtonGradiant>
            {errors.root && (
                <span className={"text-[rgb(255,0,0)]"}>
                    {errors.root.message}
                </span>
            )}
        </form>
    );
}
