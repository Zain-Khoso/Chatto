// Utils
import PropTypes from "prop-types";

export default function ButtonGradiant({ handleClick, children, width, type }) {
    return (
        <button
            type={type}
            className={`block ${width} bg-gradient-to-br from-primary-200 to-primary-300 text-xl font-medium text-light-100 px-6 py-2 rounded-md transition delay-100 ease-in-out hover:shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]`}
            onClick={handleClick}>
            {children}
        </button>
    );
}

ButtonGradiant.defaultProps = {
    handleClick: () => {},
    children: "Button Text",
    width: "w-fit",
    type: "button",
};

ButtonGradiant.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.string,
    width: PropTypes.string,
    type: PropTypes.string,
};
