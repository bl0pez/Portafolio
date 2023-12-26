"use client";
import Image from "next/image";
import NavMobile from "../navbar/NavbarMovile";
import { Link } from "react-scroll";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="bg-nav w-full top-0 left-0 right-0 fixed z-40">
      <div className="container mx-auto flex justify-between items-center p-2">
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="home"
          className="relative h-16 w-16 z-30 cursor-pointer"
        >
          <Image src="/logo.svg" alt="logo" fill priority />
        </Link>
        <Navbar />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
