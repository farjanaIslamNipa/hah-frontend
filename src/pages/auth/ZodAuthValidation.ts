import {z} from "zod";

export const registerSchema = z.object({
  username: z.string().min(1, {message: 'Username is required'}),
  email: z.string().min(1, {message: 'Email is required'}),
  password: z.string().min(6, {message: 'Minimum 6 characters required'})
})

export const loginSchema = z.object({
  email: z.string().min(1, {message: 'Email is required'}).email(),
  password: z.string().min(1, {message: 'Password field required'})
})


export type TRegisterUser = z.infer<typeof registerSchema>
export type TLoggedInUser = z.infer<typeof loginSchema>
