import { TSupplyCategory } from './../../../types/supply.types';
import {z} from "zod"

const supplyCategory : TSupplyCategory[] = ['Medical Supplies', 'First Aid Kit', 'Medications'] as const
export const supplySchema = z.object({
  title: z.string().min(1, {message: 'Title is required'}),
  img: z.string(),
  category: z.enum(([...supplyCategory] as [string, ...string[]]), {
    errorMap: () => ({ message: 'Please select a category' })
  }),
  quantity: z.string().min(1, {message: 'Quantity is required'}),
  description: z.string().optional()
})

export type TAddSupply = z.infer<typeof supplySchema>
