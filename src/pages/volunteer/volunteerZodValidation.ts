import {z} from "zod"


export const volunteerSchema = z.object({
  name:  z.string().min(1, {message: 'Name field is required'}),
  email: z.string().min(1, {message: 'Email field is required'}),
  phone: z.string().min(1, {message: 'Mobile no is required'}),
  address: z.string().min(1, {message: 'Address field is required'})
})

export type TAddSupply = z.infer<typeof volunteerSchema>