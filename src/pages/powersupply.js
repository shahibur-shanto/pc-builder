import HomeProduct from "../../components/layouts/HomeProduct";
import RootLayouts from "../../components/layouts/RootLayouts";

const PowerSupply = ({ allData }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {allData.map((product) => {
        return (
          <>
            <HomeProduct key={product.id} product={product} />
          </>
        );
      })}
    </div>
  );
};

export default PowerSupply;
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  const motherboardData = data.filter(
    (product) => product.category === "Power Supply"
  );

  return {
    props: {
      allData: motherboardData,
    },
  };
};
PowerSupply.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
