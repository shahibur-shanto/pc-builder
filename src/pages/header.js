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
            <Link href="/motherboard">Motherboard</Link>
          </li>
          <li>
            <Link href="/ram">RAM</Link>
          </li>
          <li>
            <Link href="/powersupply">Power Supply Unit </Link>
          </li>
          <li>
            <Link href="/storage">Storage Device </Link>
          </li>
          <li>
            <Link href="/monitor">Monitor</Link>
          </li>
          <li>
            <Link href="/others">Others</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/pcbuilder" className="btn">
          PC BUILDER
        </Link>
      </div>
    </div>
  );
};

export default HeaderPage;
