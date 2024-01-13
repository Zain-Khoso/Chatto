// Components
import ButtonGradiant from "../../../components/ButtonGradiant";

export default function TopBar() {
    return (
        <section className="min-w-96 w-4/5 flex justify-between items-center px-4 py-2 mx-auto">
            <h1 className="inline-block bg-gradient-to-br from-primary-200 to-primary-300 text-transparent bg-clip-text text-4xl font-brand font-semibold h-fit hover:cursor-default tablet:font-bold">
                Chatto
            </h1>

            <ButtonGradiant>Sign In</ButtonGradiant>
        </section>
    );
}
