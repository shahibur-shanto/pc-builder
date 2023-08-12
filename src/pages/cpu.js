import HomeProduct from "../../components/layouts/HomeProduct";
import RootLayouts from "../../components/layouts/RootLayouts";

const CPU = ({ allData }) => {
  // console.log(allData);
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

export default CPU;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  const motherboardData = data.filter(
    (product) => product.category === "CPU / Processor"
  );

  return {
    props: {
      allData: motherboardData,
    },
  };
};
CPU.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
