// Utils
import PropTypes from "prop-types";

export default function ButtonGradiant({ handleClick, children }) {
    return (
        <button
            className="block w-fit bg-gradient-to-br from-primary-200 to-primary-300 text-xl font-medium text-light-100 px-6 py-2 rounded-md hover:shadow-dark-200/40 hover:shadow-md"
            onClick={handleClick}>
            {children}
        </button>
    );
}

ButtonGradiant.defaultProps = {
    handleClick: () => {},
    children: "Button Text",
};

ButtonGradiant.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.string,
};
