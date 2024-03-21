
import {z} from "zod"


export const testimonialSchema = z.object({
  testimonial: z.string().min(1, {message: 'This field is required'}),
  address: z.string().min(1, {message: 'This field is required'})
})

export type TAddSupply = z.infer<typeof testimonialSchema>