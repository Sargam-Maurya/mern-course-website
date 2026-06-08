const {z} = require("zod")

//creating an object scheme ....registration ke liye schema creat karna hai 
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(3, { message: "email must be at least 3 chars." })
    .max(255, { message: "email must not be more than 255 characters" }),

  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be at least 7 chars." })
    .max(1024, { message: "password must not be more than 1024 characters" }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least of 3 chars."})
    .max(255, {message: "Name must not me more than 255 characters"}),
    
  phone: z
    .string({required_error: "phone is required"})
    .trim()
    .min(10, {message: "phone must be at least of 10 chars."})
    .max(20, {message: "phone must not me more than 20 characters"}),
});

const contactSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(255),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(3, { message: "email must be at least 3 chars." })
    .max(255, { message: "email must not be more than 255 characters" }),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000),
});

module.exports = {signupSchema,loginSchema, contactSchema};