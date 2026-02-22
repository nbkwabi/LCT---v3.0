import { z } from "zod";

export const enquirySchema = z.object({
  careHomeName: z.string().min(2, "Please enter your care home name"),
  contactName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(
      /^(?:0|\+44)[0-9\s]{9,13}$/,
      "Please enter a valid UK phone number",
    ),
  numberOfStaff: z.string().optional(),
  message: z.string().optional(),
  companyWebsite: z.string().max(0),
  gdprConsent: z.literal(true, {
    message: "Please confirm you agree to be contacted",
  }),
  sourceUrl: z.string().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
