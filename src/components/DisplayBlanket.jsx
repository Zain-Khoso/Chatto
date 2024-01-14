// Utils
import PropTypes from "prop-types";

export default function DisplayBlanket({ show, handleClick }) {
    return (
        show && (
            <div
                className="fixed inset-0 w-dvw h-dvh bg-dark-400/60 backdrop-blur-md z-30"
                onClick={handleClick}></div>
        )
    );
}

DisplayBlanket.defaultProps = {
    show: false,
    handleClick: () => {},
};

DisplayBlanket.propTypes = {
    show: PropTypes.bool,
    handleClick: PropTypes.func,
};
