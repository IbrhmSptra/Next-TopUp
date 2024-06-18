import Button from "../_components/Button";
import Logo from "../_components/Logo";
import { CiSearch } from "react-icons/ci";
import NavLink from "../_components/NavLink";
import MenuIcon from "../_components/MenuIcon";

const Navbar = () => {
  return (
    <nav className="w-full py-2 px-4 flex justify-between items-center xl:px-40">
      <div className="flex items-center gap-10">
        <Logo width={40} height={40} />
        <Button className="text-sm flex items-center gap-x-2" size="long">
          <CiSearch size={20} /> Search
        </Button>
      </div>
      <MenuIcon size={50} classname="md:hidden" />
      <div className="items-center gap-6 hidden md:flex">
        <NavLink links={["Beranda", "Cek Transaksi"]} />
        <Button size="short" variant="outline">
          Masuk
        </Button>
        <Button size="short" variant="bgray">
          Daftar
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
