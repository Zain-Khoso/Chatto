// Components
import GoogleAuth from "./GoogleAuth";
import Form from "./Form";

export default function FormWrapper() {
    return (
        <div className="w-11/12 max-w-lg flex flex-col justify-center items-center gap-12 mx-auto desktop:w-4/5">
            <GoogleAuth />

            <div className="relative w-full">
                <span className="block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-dark-400 font-semibold bg-light-200 px-1 z-10">
                    OR
                </span>
                <div className="w-full h-[1px] bg-dark-200"></div>
            </div>

            <Form />
        </div>
    );
}
