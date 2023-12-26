import NavMobile from "../navbar/NavbarMovile";
import Navbar from "../navbar/Navbar";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <header className="bg-nav w-full top-0 left-0 right-0 fixed z-40">
      <div className="container mx-auto flex justify-between items-center p-2 max-w-[1200px]">
        <Logo />
        <Navbar />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
