import Image from "next/image";
import logo from "../../src/pages/logo.png";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="navbar bg-green">
      <div className="navbar-start">
        <Link href="#">
          <Image src={logo} alt="logo" className="rounded w-24"></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>CPU / Processor </a>
          </li>
          <li>
            <a>Motherboard</a>
          </li>
          <li>
            <a>RAM</a>
          </li>
          <li>
            <a>Power Supply Unit </a>
          </li>
          <li>
            <a>Storage Device </a>
          </li>
          <li>
            <a>Monitor</a>
          </li>
          <li>
            <a>Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="#" className="btn">
          PC BUILDER
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
