import { z } from "zod";

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/;

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Please enter your email address." }).email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, { message: "Please enter your password." })
    .min(8, { message: "Password must be at least 8 characters." })
    .max(50, { message: "Password must be at most 50 characters." }),
});

export const registerSchema = z
  .object({
    email: z.string().min(1, { message: "Please enter your email address." }).email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, { message: "Please enter a password." })
      .min(8, { message: "Password must be at least 8 characters." })
      .max(50, { message: "Password must be at most 50 characters." }),
    // .regex(passwordRegex, {
    //   message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    // }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password." }),
    phone: z
      .string()
      .min(1, { message: "Please enter your phone number." })
      .max(20, { message: "Phone number must be at most 20 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match.", path: ["confirmPassword"] });

export const subscriptionSchema = z.object({
  email: z.string().min(1, { message: "Please enter your email address." }).email("Please enter a valid email address."),
});
