import HomeProduct from "../../components/layouts/HomeProduct";
import RootLayouts from "../../components/layouts/RootLayouts";

const RAM = ({ allData }) => {
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

export default RAM;
export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-server-delta.vercel.app/data");
  const data = await res.json();
  const motherboardData = data.data.filter((product) => product.category === "RAM");

  return {
    props: {
      allData: motherboardData,
    },
  };
};
RAM.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
