import { ReactNode } from "react";

type Children = ReactNode;
type ButtonType = "submit" | "reset" | "button";

export type Props = {
    children: Children;
    width?: string;
    btnType?: ButtonType;
    handleClick?: () => void;
};
