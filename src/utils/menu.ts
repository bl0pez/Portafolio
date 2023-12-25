interface Menu {
    name: string;
    path: string;
    offset?: number;
}

export const menus: Menu[] = [
    {
        name: 'Inicio',
        path: 'home',
        offset: -50
    },
    {
        name: 'Proyectos',
        path: 'projects',
        offset: -50
    },
    {
        name: 'Contacto',
        path: 'contact',
        offset: -50
    },
]
