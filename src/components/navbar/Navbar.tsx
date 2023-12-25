"use client";
import { Link } from "react-scroll";
import { menus } from "@/utils/menu";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-2 items-center">
      {menus.map((menu, index) => {
        return (
          <Link
            key={menu.path}
            to={menu.path}
            spy={true}
            smooth={true}
            offset={menu.offset}
            duration={500}
            activeClass="text-primary"
            className={`cursor-pointer rounded-full px-3 py-1.5 transition-all text-lg font-medium hover:opacity-50`}
          >
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
