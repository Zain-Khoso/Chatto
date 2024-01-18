// Assets
import SVG from "@/assets/svgs/spinner.svg";

export default function Spinner() {
    return (
        <div className="w-dvw h-dvh grid place-items-center">
            <img
                src={SVG}
                className="w-1/2 max-w-20 aspect-square animate-[swiftSpin_1s_linear_infinite]"
            />
        </div>
    );
}
