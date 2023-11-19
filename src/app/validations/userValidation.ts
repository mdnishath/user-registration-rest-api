import { z } from 'zod';

export const userVelidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['user', 'admin']).optional(),
  isActive: z.boolean().optional(),
});

export type UserSchemaType = z.infer<typeof userVelidation>;
