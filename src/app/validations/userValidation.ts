import { z } from 'zod';

// Define the Zod validation schema for Name
const NameValidationSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().min(1),
  lastName: z.string().min(1),
});

// Define the Zod validation schema for Contact
const ContactValidationSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  website: z.string().optional(),
  facebook: z.string().optional(),
});

// Define the Zod validation schema for Address
const AddressValidationSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
});

// Define the Zod validation schema for User
const UserValidationSchema = z.object({
  name: NameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  contact: ContactValidationSchema,
  address: AddressValidationSchema,
  role: z.enum(['user', 'admin', 'superadmin']).optional(),
  isActive: z.boolean(),
});

export { UserValidationSchema };
