
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {useGetSuppliesQuery} from '../redux/features/supply/supplyApi';
import {useEffect, useState} from 'react';
import {TSupply} from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);



const PieChart = () => {
  const { data: supplies, isError } = useGetSuppliesQuery(undefined);

  const [categories, setCategories] = useState<string[]>([])
  const [medicalSupply, setMedicalSupply] = useState<number | null>(null)
  const [firstAidKit, setFirstAidKit] = useState<number | null>(null)
  const [medications, setMedications] = useState<number | null>(null)

  useEffect(() => {
    if(supplies?.data){
      const categoryItems : string[] = []
      const medicalSupplyQuantity : number[] = []
      const firstAidKitQuantity : number[] = []
      const medicationsQuantity : number[] = []
      supplies?.data.map((supply : TSupply) => {
        if(!categoryItems.includes(supply?.category)){
          categoryItems.push(supply?.category)
        }

        if(supply?.category === "Medical Supplies"){
          medicalSupplyQuantity.push(Number(supply?.quantity))
        }
        if(supply?.category === "First Aid Kit"){
          firstAidKitQuantity.push(Number(supply?.quantity))
        }
        if(supply?.category === "Medications"){
          medicationsQuantity.push(Number(supply?.quantity))
        }

      })

      const totalMedicalSupply = medicalSupplyQuantity.reduce((a, b) => a + b, 0)
      const totalFirstAidKit = firstAidKitQuantity.reduce((a, b) => a + b, 0)
      const totalMedications = medicationsQuantity.reduce((a, b) => a + b, 0)

      setCategories(categoryItems)
      setMedicalSupply(totalMedicalSupply)
      setFirstAidKit(totalFirstAidKit)
      setMedications(totalMedications)

    }
  }, [supplies?.data])


  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Quantity',
        data: [medicalSupply, firstAidKit, medications],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return <Pie data={data} />;
};

export default PieChart;