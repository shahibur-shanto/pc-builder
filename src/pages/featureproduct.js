import Image from "next/image";
import RootLayouts from "../../components/layouts/RootLayouts";
import Link from "next/link";

const Featureproduct = ({ category }) => {
  return (
    <div>
      {/* {allCategory.map((category) => {
            return ( */}
      <div className="m-10 rounded bg-slate-200" key={category.id}>
        <Link href={`/${category.category}`}>
          <div>
            <Image
              width={150}
              height={150}
              src={category.image}
              alt={category.category}
            />
          </div>
          <div className="m-5">
            <p>{category.category}</p>
          </div>
        </Link>
      </div>
      {/* );
          })} */}
    </div>
  );
};

export default Featureproduct;

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/category");
//   const data = await res.json();

//   return {
//     props: {
//       allCategory: data,
//     },
//   };
// };

Featureproduct.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
