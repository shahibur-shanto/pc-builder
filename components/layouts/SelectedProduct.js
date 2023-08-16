import {
  addToCPUCart,
  addToMonitorCart,
  addToMotherboardCart,
  addToPowerSupplyCart,
  addToRAMCart,
  addToStorageCart,
} from "@/redux/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const SelectedProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (product.category === "CPU / Processor") {
      dispatch(addToCPUCart(product));
    } else if (product.category === "Motherboard") {
      dispatch(addToMotherboardCart(product));
    } else if (product.category === "Monitor") {
      dispatch(addToMonitorCart(product));
    } else if (product.category === "Storage") {
      dispatch(addToStorageCart(product));
    } else if (product.category === "Power Supply") {
      dispatch(addToPowerSupplyCart(product));
    } else if (product.category === "RAM") {
      dispatch(addToRAMCart(product));
    }
  };
  //   console.log(product);
  return (
    <Link
      href="/pcbuilder"
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
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary"
            >
              Choose
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SelectedProduct;
