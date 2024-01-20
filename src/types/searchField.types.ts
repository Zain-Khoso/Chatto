// Utils
import { z } from "zod";

export const schema = z.object({
    query: z.string(),
});

export type SearchField = z.infer<typeof schema>;
