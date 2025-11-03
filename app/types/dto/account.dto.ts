import { z } from "zod";

// ✅ Schema defines both type AND validation
export const createAccountDTOSchema = z.object({
  email: z.email(),
  name: z.string().min(2).max(100),
});

export type CreateAccountDTO = z.infer<typeof createAccountDTOSchema>;
