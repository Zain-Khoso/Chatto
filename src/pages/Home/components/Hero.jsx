// Assets
import illustration from "../assets/svgs/heroIllustration.svg";
import HighlightedText from "./HighlightedText";
import ButtonGradiant from "../../../components/ButtonGradiant";

export default function Hero() {
    return (
        <section className="min-w-80 w-4/5 flex flex-col justify-center items-center gap-8 px-4 py-8 mx-auto tablet:flex-row-reverse tablet:my-12">
            <div className="w-full px-2 tablet:w-screen">
                <img
                    src={illustration}
                    alt="An illustration"
                    className="w-full"
                />
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-8 tablet:items-start">
                <p className="max-w-sm text-2xl font-bold text-balance text-center text-dark-400 leading-normal bg-gradient-to-br from-primary-200 to-primary-300 bg-[length:0%_3px] bg-no-repeat bg-left-bottom transition-all hover:cursor-pointer hover:bg-[length:100%_3px] tablet:text-left">
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
