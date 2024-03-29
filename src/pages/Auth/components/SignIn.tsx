// Utils
import useFormType from "../hooks/useFormType";

// Assets
import Illustration from "../assets/svgs/signInFormIllustration.svg";

// Components
import FormWrapper from "./FormWrapper";

export default function SignIn() {
    useFormType("SIGN IN");

    return (
        <main className="w-dvw h-dvh flex justify-center items-center desktop:min-h-[700px]">
            <section className="w-full h-full flex justify-center items-center rounded-2xl shadow-[0px_0px_4px_1px_rgba(0,0,0,0.15);] overflow-hidden desktop:w-4/5 desktop:h-4/5 desktop:min-h-[600px]">
                <div className="w-[130%] h-full hidden justify-center items-center bg-gradient-to-br from-primary-200 to-primary-300 p-4 desktop:flex">
                    <img src={Illustration} alt="simple Sign In Illustration" />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center gap-8">
                    <h1 className="text-4xl font-brand font-bold text-transparent bg-gradient-to-br from-primary-200 to-primary-300 bg-clip-text">
                        Welcome back !
                    </h1>

                    <FormWrapper />
                </div>
            </section>
        </main>
    );
}
