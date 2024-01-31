import { Link } from "react-router-dom";

export default function SidebarLink({ className, icono, categoria, ...props }) {
    return (
        <Link
            className={`text-base text-gray-900 font-bold rounded-md flex items-center p-2 hover:bg-amber-400 hover:text-white group flex gap-4 ${className}}`}
            {...props}
        >
          <img src="../img/icono_dona.svg" className="size-10" alt={`Icono icono`} /> {categoria}
        </Link>
    );
}
