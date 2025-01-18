import { customers } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required."),
  lastName: (schema) => schema.min(1, "Last name is required."),
  address1: (schema) => schema.min(1, "Address 1 is required."),
  city: (schema) => schema.min(1, "City is required."),
  state: (schema) => schema.length(2, "State must be 2 characters."),
  email: (schema) => schema.email("Please enter a valid email address."),
  zip: (schema) =>
    schema.regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code."),
  phone: (schema) =>
    schema.regex(/^\d{3}-\d{4}-\d{4}$/, "Please enter a valid phone number."),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;

export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
