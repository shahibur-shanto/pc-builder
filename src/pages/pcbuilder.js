import Image from "next/image";
import RootLayouts from "../../components/layouts/RootLayouts";
import Link from "next/link";
import { useSelector } from "react-redux";

const PCbuilderPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Selected Item</th>

              <th>Choose</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={100}
                        height={100}
                        src="https://cdn-icons-png.flaticon.com/512/2/2028.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">CPU / Processor </div>
                  </div>
                </div>
              </td>

              <td>
                {cart.cartCPUItems.length === 0 ? (
                  <p>No Item Selected</p>
                ) : (
                  <>
                    <p>{cart.cartCPUItems[0].id}</p>
                    <p>{cart.cartCPUItems[0].product_name}</p>
                    <Image
                      width={100}
                      height={100}
                      src={cart.cartCPUItems[0].image}
                      alt=""
                    />
                    <p>Price: {cart.cartCPUItems[0].price}</p>
                  </>
                )}
              </td>
              <th>
                <Link href="/selectedProduct/selectCpu">
                  <button className="btn btn-ghost btn-xs">Choose</button>
                </Link>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={100}
                        height={100}
                        src="https://cdn-icons-png.flaticon.com/512/5921/5921800.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Motherboard</div>
                  </div>
                </div>
              </td>
              <td>
                {cart.cartMotherboardItems.length === 0 ? (
                  <p>No Item Selected</p>
                ) : (
                  <>
                    <p>{cart.cartMotherboardItems[0].product_name}</p>
                    <Image
                      width={100}
                      height={100}
                      src={cart.cartMotherboardItems[0].image}
                      alt=""
                    />
                    <p>Price: {cart.cartMotherboardItems[0].price}</p>
                  </>
                )}
              </td>
              <th>
                <Link href="/selectedProduct/selectMotherboard">
                  <button className="btn btn-ghost btn-xs">Choose</button>
                </Link>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={100}
                        height={100}
                        src="https://static.vecteezy.com/system/resources/thumbnails/006/402/177/small/a-trendy-flat-style-icon-of-ram-system-hardware-vector.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">RAM</div>
                  </div>
                </div>
              </td>
              <td>
                {cart.cartRAMItems.length === 0 ? (
                  <p>No Item Selected</p>
                ) : (
                  <>
                    <p>{cart.cartRAMItems[0].product_name}</p>
                    <Image
                      width={100}
                      height={100}
                      src={cart.cartRAMItems[0].image}
                      alt=""
                    />
                    <p>Price: {cart.cartRAMItems[0].price}</p>
                  </>
                )}
              </td>
              <th>
                <Link href="/selectedProduct/selectRAM">
                  <button className="btn btn-ghost btn-xs">Choose</button>
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={100}
                        height={100}
                        src="https://cdn-icons-png.flaticon.com/512/7036/7036621.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Power Supply Unit</div>
                  </div>
                </div>
              </td>
              <td>
                {cart.cartPowerSupplyItems.length === 0 ? (
                  <p>No Item Selected</p>
                ) : (
                  <>
                    <p>{cart.cartPowerSupplyItems[0].product_name}</p>
                    <Image
                      width={100}
                      height={100}
                      src={cart.cartPowerSupplyItems[0].image}
                      alt=""
                    />
                    <p>Price: {cart.cartPowerSupplyItems[0].price}</p>
                  </>
                )}
              </td>
              <th>
                <Link href="/selectedProduct/selectPowerSupply">
                  <button className="btn btn-ghost btn-xs">Choose</button>
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={100}
                        height={100}
                        src="https://cdn-icons-png.flaticon.com/512/2906/2906220.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Storage Device</div>
                  </div>
                </div>
              </td>
              <td>
                {cart.cartStorageItems.length === 0 ? (
                  <p>No Item Selected</p>
                ) : (
                  <>
                    <p>{cart.cartStorageItems[0].product_name}</p>
                    <Image
                      width={100}
                      height={100}
                      src={cart.cartStorageItems[0].image}
                      alt=""
                    />
                    <p>Price: {cart.cartStorageItems[0].price}</p>
                  </>
                )}
              </td>
              <th>
                <Link href="/selectedProduct/selectStorage">
                  <button className="btn btn-ghost btn-xs">Choose</button>
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={100}
                        height={100}
                        src="https://static.vecteezy.com/system/resources/previews/000/582/064/original/tv-icon-vector-illustration.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Monitor</div>
                  </div>
                </div>
              </td>
              <td>
                {cart.cartMonitorItems.length === 0 ? (
                  <p>No Item Selected</p>
                ) : (
                  <>
                    <p>{cart.cartMonitorItems[0].product_name}</p>
                    <Image
                      width={100}
                      height={100}
                      src={cart.cartMonitorItems[0].image}
                      alt=""
                    />
                    <p>Price: {cart.cartMonitorItems[0].price}</p>
                  </>
                )}
              </td>
              <th>
                <Link href="/selectedProduct/selectMonitor">
                  <button className="btn btn-ghost btn-xs">Choose</button>
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 content-center m-10">
        {cart.cartCPUItems.length === 0 &&
        cart.cartMotherboardItems.length === 0 &&
        cart.cartPowerSupplyItems.length === 0 &&
        cart.cartRAMItems.length === 0 &&
        cart.cartStorageItems.length === 0 &&
        cart.cartMonitorItems.length === 0 ? (
          <button disabled className="btn bg-blue-100 btn-xs">
            Complete
          </button>
        ) : (
          <button className="btn bg-blue-100 btn-xs">Complete</button>
        )}
      </div>
    </div>
  );
};

export default PCbuilderPage;

PCbuilderPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
