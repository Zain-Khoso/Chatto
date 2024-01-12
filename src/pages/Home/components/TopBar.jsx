// Components
import ButtonGradiant from "../../../components/ButtonGradiant";

export default function TopBar() {
    return (
        <section className="w-full flex justify-between items-center px-4 py-2 max-w-3xl mx-auto">
            <h1 className="inline-block bg-gradient-to-br from-primary-200 to-primary-300 text-transparent bg-clip-text text-4xl font-brand font-semibold h-fit tablet:font-bold">
                Chatto
            </h1>

            <ButtonGradiant>Sign Up</ButtonGradiant>
        </section>
    );
}
