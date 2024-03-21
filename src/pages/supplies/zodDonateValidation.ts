
import {z} from "zod"
import {TSupplyCategory} from "../../types"

const supplyCategory : TSupplyCategory[] = ['Medical Supplies', 'First Aid Kit', 'Medications'] as const

export const donationSchema = z.object({
  title: z.string().min(1, {message: 'Title is required'}),
  category: z.enum(([...supplyCategory] as [string, ...string[]]), {
    errorMap: () => ({ message: 'Please select a category' })
  }),
  quantity: z.string().min(1, {message: 'Quantity is required'}),
  description: z.string().optional()
})

export type TAddDonation = z.infer<typeof donationSchema>