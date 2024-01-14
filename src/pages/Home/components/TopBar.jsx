// Utils
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../configs/firebase";

// Components
import ButtonGradiant from "../../../components/ButtonGradiant";
import User from "../../../components/User";

export default function TopBar() {
    const [user] = useAuthState(auth);

    return (
        <section className="w-full flex justify-between items-center px-4 py-2 mx-auto tablet:w-4/5">
            <h1 className="inline-block bg-gradient-to-br from-primary-200 to-primary-300 text-transparent bg-clip-text text-4xl font-brand font-semibold h-fit hover:cursor-default tablet:font-bold">
                Chatto
            </h1>

            {user ? (
                <User />
            ) : (
                <Link to="/user/sign-in">
                    <ButtonGradiant>Sign In</ButtonGradiant>
                </Link>
            )}
        </section>
    );
}
