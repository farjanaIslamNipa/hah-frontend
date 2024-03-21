export type TSupply = {
  _id: string;
  img: string;
  title: string;
  category: string;
  quantity: number;
  description: string;
}

export type TSupplyState = {
  supplies : null | TSupply
}

export type TSupplyCategory = 'Medical Supplies' | 'First Aid Kit' | 'Medications'