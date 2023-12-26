interface Menu {
  name: string;
  path: string;
  offset?: number;
}

export const menus: Menu[] = [
  {
    name: "Inicio",
    path: "#home",
  },
  {
    name: "Proyectos",
    path: "#projects",
  },
  {
    name: "Contacto",
    path: "#contact",
  },
];
