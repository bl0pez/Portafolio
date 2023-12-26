"use client";
import { useObserver } from "@/hooks/useObserver";
import { menus } from "@/utils/menu";

const Navbar = () => {

  const { currentSection, scrollToSection } = useObserver();

  return (
    <nav className="hidden md:flex gap-2 items-center">
      {menus.map((menu) => {
        return (
          <button
            key={menu.path}
            onClick={() => scrollToSection(menu.path)}
            className={`cursor-pointer px-3 py-1.5 transition-all text-lg font-medium hover:opacity-50 ${currentSection === menu.path && 'text-primary'}`}
          >
            {menu.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
