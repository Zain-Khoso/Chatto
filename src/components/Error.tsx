// Utils
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

// Components
import ButtonDark from "./ButtonDark";

export default function Error() {
    const navigate = useNavigate();

    return (
        <main className="w-dvw h-dvh flex flex-col justify-center items-center gap-8">
            <h1 className="text-primary-200 text-4xl font-body font-bold">
                Oops!
            </h1>
            <p className="text-center font-semibold">
                An error occured while trying to load this page. <br /> Go back
                to the previous page.
            </p>
            <ButtonDark handleClick={() => navigate(-1)}>
                <FaArrowLeft /> Go Back
            </ButtonDark>
        </main>
    );
}
