// Types
import { Props } from "@/types/button.types";

export default function ButtonGradiant({
    children,
    width,
    btnType,
    handleClick,
}: Props) {
    return (
        <button
            type={btnType}
            className={`block ${width} bg-gradient-to-br from-primary-200 to-primary-300 text-xl font-medium text-light-100 px-6 py-2 rounded-md transition delay-100 ease-in-out hover:shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]`}
            onClick={handleClick}>
            {children}
        </button>
    );
}

ButtonGradiant.defaultProps = {
    width: "w-fit",
    btnType: "button",
    handleClick: () => {},
};
