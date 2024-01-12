// Assets
import illustration from "../assets/svgs/heroIllustration.svg";
import HighlightedText from "./HighlightedText";
import ButtonGradiant from "../../../components/ButtonGradiant";

export default function Hero() {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-8 px-4 py-8 max-w-5xl mx-auto tablet:flex-row-reverse tablet:px-16  tablet:py-12 tablet:items-start">
            <div className="w-full px-2 max-w-md tablet:w-screen">
                <img
                    src={illustration}
                    alt="An illustration"
                    className="w-full"
                />
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-8 tablet:items-start">
                <p className=" max-w-sm text-2xl font-bold text-center text-dark-400 leading-normal tablet:text-left tablet:pt-8">
                    Connect with <HighlightedText>Chatto</HighlightedText>,
                    Where Every Word <HighlightedText>Sparks</HighlightedText> a
                    Symphony of <HighlightedText>Conversations</HighlightedText>
                    !
                </p>

                <ButtonGradiant>Start Chatting</ButtonGradiant>
            </div>
        </section>
    );
}
