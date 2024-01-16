// Types
import { Props } from "@/types/button.types";

export default function ButtonDark({
    children,
    width,
    btnType,
    handleClick,
}: Props) {
    return (
        <button
            type={btnType}
            onClick={handleClick}
            className={`flex justify-center items-center gap-4 ${width} bg-dark-400 text-lg font-medium text-light-100 px-6 py-2 rounded-md transition delay-100 ease-in-out hover:shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]`}>
            {children}
        </button>
    );
}

ButtonDark.defaultProps = {
    width: "w-fit",
    btnType: "button",
    handleClick: () => {},
};
