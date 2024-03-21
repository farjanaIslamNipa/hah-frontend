import SupplyCard from "../../components/SupplyCard";
import {useGetSuppliesQuery} from "../../redux/features/supply/supplyApi";
import {TSupply} from "../../types";

const AllSupplies = () => {
  const { data: supplies, isError } = useGetSuppliesQuery(undefined);
  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return (
    <div>
      <div className="supply-header-bg flex justify-center items-center">
        <h1 className="text-center font-bold text-4xl md:text-5xl text-white px-8">Health and Medical Supplies Donations</h1>
      </div>
      <div className="custom-container pb-14">
        <div className="mt-2 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 sm:gap-y-6">
          {supplies?.data?.length &&
            supplies?.data.map((supply: TSupply) => <SupplyCard key={supply._id} supply={supply} />)}
        </div>
      </div>
    </div>
  );
};

export default AllSupplies;