// Utils
import PropTypes from "prop-types";

export default function ButtonDark({ handleClick, children }) {
    return (
        <button
            className="flex justify-center items-center gap-4 w-full bg-dark-400 text-lg font-medium text-light-100 px-6 py-2 rounded-md transition delay-100 ease-in-out hover:shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]"
            onClick={handleClick}>
            {children}
        </button>
    );
}

ButtonDark.defaultProps = {
    handleClick: () => {},
    children: "Button Text",
};

ButtonDark.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
