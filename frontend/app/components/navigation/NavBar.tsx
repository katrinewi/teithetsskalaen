import Image from "next/image";
import LightModeIcon from "../../assets/icons/LightModeIcon";
import logo from "../../assets/logos/logo-dark.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-2 text-lg mb-5 items-center">
      <div className="flex justify-between gap-10 items-center">
        <Image alt={"Teithetsskalaen"} className="w-60" src={logo} />
        <ul className="flex justify-between gap-5">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <LightModeIcon fill={"white"} />
      </div>
    </nav>
  );
};

export default NavBar;
