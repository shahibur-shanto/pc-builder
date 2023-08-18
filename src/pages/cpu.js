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

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-server-delta.vercel.app/data");
  const data = await res.json();
  const cpuData = data.data.filter(
    (product) => product.category === "CPU / Processor"
  );

  return {
    props: {
      allData: cpuData,
    },
  };
};
CPU.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
