import RootLayouts from "../../../components/layouts/RootLayouts";
import SelectedProduct from "../../../components/layouts/SelectedProduct";

const SelectMonitor = ({allData}) => {
  return <div className="grid grid-cols-3 gap-8">
  {allData.map((product) => {
    return (
      <>
        <SelectedProduct   key={product.id} product={product} />
      </>
    );
  })}
</div>;
};

export default SelectMonitor;
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  const motherboardData = data.filter((product) => product.category === "Monitor");

  return {
    props: {
      allData: motherboardData,
    },
  };
};
SelectMonitor.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
