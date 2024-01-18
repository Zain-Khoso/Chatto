// Utils
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";
import { selectAuthSlice } from "@/contexts/formSlice";

// Types
import { PasswordProps } from "@/types/authForm.types";

export default function PasswordFeild({ register, errors }: PasswordProps) {
    // Store Access
    const formType = useSelector(selectAuthSlice);

    const [visible, setVisible] = useState(false);

    return (
        <div className="w-full flex flex-col gap-2 justify-between items-end">
            <div
                className={`relative w-full flex justify-between items-center gap-2 p-4 rounded-md shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15);] ${
                    errors?.root || errors?.password
                        ? "border border-[rgba(255,0,0,.5)]"
                        : ""
                }`}>
                <span
                    className={
                        errors?.password
                            ? "absolute -top-1/2 left-0 text-[rgb(255,0,0)]"
                            : "fixed -left-full"
                    }>
                    {errors.password?.message}
                </span>
                <div className="w-full flex flex-row-reverse justify-start items-center gap-2 peer">
                    <label htmlFor="email" className="fixed -left-full">
                        Password
                    </label>
                    <input
                        type={visible ? "text" : "password"}
                        id="password"
                        aria-label="Write your password."
                        {...register("password")}
                        className="w-full h-full font-medium text-dark-400 bg-light-200 caret-primary-300  placeholder:text-dark-100 peer focus:outline-none"
                        placeholder="Password"
                    />

                    <div className="w-[2px] h-6 bg-dark-100 peer-focus:bg-dark-400"></div>

                    <FaLock className="w-8 aspect-square fill-dark-100 peer-focus:fill-dark-400" />
                </div>

                {visible ? (
                    <FaEyeSlash
                        className="w-8 aspect-square fill-dark-100 peer-focus-within:fill-dark-400 hover:cursor-pointer"
                        onClick={() => setVisible(!visible)}
                    />
                ) : (
                    <FaEye
                        className="w-8 aspect-square fill-dark-100 peer-focus-within:fill-dark-400 hover:cursor-pointer"
                        onClick={() => setVisible(!visible)}
                    />
                )}
            </div>

            {formType === "SIGN IN" ? (
                <Link
                    to="/user/sign-up"
                    className="text-xs font-medium text-primary-200">
                    Don't have an account? Create one.
                </Link>
            ) : (
                <Link
                    to="/user/sign-in"
                    className="text-xs font-medium text-primary-200">
                    Already have an account? Sign In.
                </Link>
            )}
        </div>
    );
}
