// Utils
import PropTypes from "prop-types";

export default function HighlightedText({ children }) {
    return <span className="text-primary-200">{children}</span>;
}

HighlightedText.defaultProps = {
    children: "Some Text",
};

HighlightedText.propTypes = {
    children: PropTypes.string,
};
