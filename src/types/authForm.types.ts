// Utils
import { Dispatch } from "react";

export type formType = "SIGN IN" | "SIGN UP";

export type formTypeContext = {
    formType: formType;
    formTypeReducer: Dispatch<formType>;
};
