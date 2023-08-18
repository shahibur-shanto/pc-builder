import Image from "next/image";
import Link from "next/link";

const HomeProduct = ({ product }) => {
  //   console.log(product);
  return (
    <Link
      href={`/${product._id}`}
      style={{
        backgroundColor: "lightcyan",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <div className="card w-96 ">
        <div style={{ marginTop: "30px" }}>
          <figure>
            <Image width={300} height={300} src={product.image} alt="Image" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.product_name}</h2>
          <p>{product.category}</p>
          <p>Tk. {product.price}</p>
          <p>{product.status}</p>
          <p>rating: {product.average_rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeProduct;
