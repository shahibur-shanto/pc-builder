import RootLayouts from "../../../components/layouts/RootLayouts";
import SelectedProduct from "../../../components/layouts/SelectedProduct";

const SelectMotherBoard = ({ allData }) => {
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

export default SelectMotherBoard;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  const motherboardData = data.filter(
    (product) => product.category === "Motherboard"
  );

  return {
    props: {
      allData: motherboardData,
    },
  };
};
SelectMotherBoard.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
