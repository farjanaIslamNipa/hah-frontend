import {z} from "zod";

export const commentSchema = z.object({
  name: z.string().min(1, {message: 'Username is required'}),
  email: z.string().min(1, {message: 'Email is required'}),
  comment: z.string().min(1, {message: 'Enter your thoughts'})
})

export type TComments = z.infer<typeof commentSchema>