// Utils
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type FormFields = {
    email: string;
    password: string;
};

export type PasswordProps = {
    register: UseFormRegister<FormFields>;
    errors: FieldErrors<FormFields>;
};
