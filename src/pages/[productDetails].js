import Image from "next/image";
import RootLayouts from "../../components/layouts/RootLayouts";

export const ProductDetails = ({ product }) => {
  const { key_features, individual_rating, reviews } = product;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div>
        <div>
          <figure>
            <Image
              className="ml-20 mt-20 mr-20"
              width={500}
              height={500}
              src={product.image}
              alt="Album"
            />
          </figure>
        </div>

        <div className="ml-20 mt-10">
          {reviews.map((review, index) => {
            return (
              <p key={index}>
                customer {index + 1} review: {review}
              </p>
            );
          })}
        </div>
      </div>
      <div className="card-body m-20">
        <h2 className="card-title">{product.product_name}</h2>
        <p>{product.category}</p>
        <p>{product.status}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <ui>
          {Object.keys(key_features).map((key) => {
            return (
              <li key={key}>
                {key}: {key_features[key]}
              </li>
            );
          })}
        </ui>
        <div>
          {individual_rating.map((rating, index) => {
            return (
              <p key={index}>
                customer {index + 1} rating: {rating}
              </p>
            );
          })}
          <p>Average Rating: {product.average_rating}</p>
        </div>

        <div className="card-actions justify-start">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-delta.vercel.app/data/${params.productDetails}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data,
    },
  };
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
