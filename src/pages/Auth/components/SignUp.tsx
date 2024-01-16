// Utils
import useFormType from "../hooks/useFormType";

// Assets
import Illustration from "../assets/svgs/signUpFormIllustration.svg";

// Components
import FormWrapper from "./FormWrapper";

export default function SignIn() {
    useFormType("SIGN UP");

    return (
        <main className="w-dvw h-dvh flex justify-center items-center">
            <section className="w-full h-full flex justify-center items-center rounded-2xl shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15);] overflow-hidden desktop:w-4/5 desktop:h-4/5">
                <div className="w-[130%] h-full hidden justify-center items-center bg-gradient-to-br from-primary-200 to-primary-300 p-4 desktop:flex">
                    <img src={Illustration} alt="simple Sign In Illustration" />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center gap-16">
                    <h1 className="w-[12ch] text-4xl font-brand font-bold leading-snug text-transparent bg-gradient-to-br from-primary-200 to-primary-300 bg-clip-text">
                        Sign Up to Start Chatting
                    </h1>

                    <FormWrapper />
                </div>
            </section>
        </main>
    );
}
