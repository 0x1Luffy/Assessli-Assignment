// validation.js
import * as z from 'zod';

export const schema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  message: z.string().nonempty(),
});
