import { useGetProductQuery } from "@/redux/api/api";
import HomeProduct from "../../components/layouts/HomeProduct";
import RootLayouts from "../../components/layouts/RootLayouts";
import Featureproduct from "./featureproduct";
import Footer from "./footer";
import HeaderPage from "./header";
import Hero from "../../components/layouts/Hero";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements randomly
  }
}

export default function Home({ allData, allCategory }) {
  const { data, isLoading, isError, error } = useGetProductQuery();
  // console.log(data);
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl mt-10">Featured Category</h1>
          <p className="text-1xl mb-10 mt-5">
            Get Your Desired Product from Featured Category!
          </p>
        </div>
        <Featureproduct />
        {/* <div className="bg-slate-100">
          <div className="grid grid-cols-5 gap-10">
            {allCategory.map((category) => {
              return <Featureproduct key={category.id} category={category} />;
            })}
          </div>
        </div> */}
      </div>
      <div className="text-center">
        <h1 className="text-4xl mt-10">Featured Products</h1>
        <p className="text-1xl mb-10 mt-5">Check & Get Your Desired Product!</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {allData.map((product) => {
          return (
            <>
              <HomeProduct key={product.id} product={product} />
            </>
          );
        })}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  const shuffledData = [...data];
  shuffleArray(shuffledData);

  const res1 = await fetch("http://localhost:5000/category");
  const data1 = await res1.json();

  return {
    props: {
      allData: shuffledData,
      allCategory: data1,
    },
  };
};
Home.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
