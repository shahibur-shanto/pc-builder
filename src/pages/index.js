import HomeProduct from "../../components/layouts/HomeProduct";
import RootLayouts from "../../components/layouts/RootLayouts";
import Footer from "./footer";
import HeaderPage from "./header";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements randomly
  }
}

export default function Home({ allData }) {
  // console.log(allData);
  return (
    <>
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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  const shuffledData = [...data];
  shuffleArray(shuffledData);

  return {
    props: {
      allData: shuffledData,
    },
  };
};
Home.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
