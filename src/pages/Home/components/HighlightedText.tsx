// Interfaces
interface Props {
    children: string;
}

// Component
export default function HighlightedText({ children }: Props) {
    return <span className="text-primary-200">{children}</span>;
}

HighlightedText.defaultProps = {
    children: "Some Text",
};
