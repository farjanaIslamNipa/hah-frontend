import { NavLink } from "react-router-dom";
import { useGetSuppliesQuery } from "../../redux/features/supply/supplyApi";
import { TSupply } from "../../types";
import SupplyCard from "../../components/SupplyCard";

const SupplySection = () => {
  const { data: supplies, isError } = useGetSuppliesQuery(undefined);
  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return (
    <div className="custom-container container-padding">
      <h1 className="section-title">
        Supplies at a glance
      </h1>
      <div className="mt-2 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 sm:gap-y-6">
        {supplies?.data?.length &&
          supplies?.data.slice(0, 6).map((supply: TSupply) => <SupplyCard key={supply._id} supply={supply} />)}
      </div>
      <div className="mt-10 text-center">
        <div className="max-w-[70%] border-t pt-6 mx-auto"></div>
        <NavLink to="/supplies" className="btn-solid">
          View All Supplies
        </NavLink>
      </div>
    </div>
  );
};

export default SupplySection;
