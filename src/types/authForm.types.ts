// Utils
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { z } from "zod";

export const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export type FormFields = z.infer<typeof FormSchema>;

export type PasswordProps = {
    register: UseFormRegister<FormFields>;
    errors: FieldErrors<FormFields>;
};
