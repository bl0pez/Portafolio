import { menus } from "@/utils/menu";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-2 items-center">
      {menus.map((menu) => {
        return (
          <a
            key={menu.path}
            href={menu.path}
            className={`cursor-pointer rounded-full px-3 py-1.5 transition-all text-lg font-medium hover:opacity-50`}
          >
            {menu.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
