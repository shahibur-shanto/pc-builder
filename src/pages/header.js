import Image from "next/image";
import Link from "next/link";

import logo from "../../src/pages/logo.png";

const HeaderPage = () => {
  return (
    <div className="navbar bg-green">
      <div className="navbar-start">
        <Link href="/">
          <Image src={logo} alt="logo" className="rounded w-24"></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/cpu">CPU / Processor </Link>
          </li>
          <li>
            <Link href='/motherboard'>Motherboard</Link>
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

export default HeaderPage;
