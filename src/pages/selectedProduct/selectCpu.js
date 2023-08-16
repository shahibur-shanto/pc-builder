import HomeProduct from "../../../components/layouts/HomeProduct";
import RootLayouts from "../../../components/layouts/RootLayouts";
import SelectedProduct from "../../../components/layouts/SelectedProduct";

const SelectCPU = ({ allData }) => {
  // console.log(allData);
  return (
    <div className="grid grid-cols-3 gap-8">
      {allData.map((product) => {
        return (
          <>
            <SelectedProduct key={product.id} product={product} />
          </>
        );
      })}
    </div>
  );
};

export default SelectCPU;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  const cpuData = data.filter(
    (product) => product.category === "CPU / Processor"
  );

  return {
    props: {
      allData: cpuData,
    },
  };
};
SelectCPU.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
