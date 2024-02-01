import useQuiosco from '../hooks/useQuiosco';


export default function SidebarLink({ className, categoria, active, ...props }) {

    const {handleCategoria} = useQuiosco();
    const {id, icono, nombre} = categoria;

    return (
        <button
            className={`text-base text-gray-900 font-bold rounded-md items-center p-2 hover:bg-amber-400 hover:text-white group flex gap-4 w-full ${className}} ${active && 'bg-amber-400 text-white'}`}
            onClick={() => handleCategoria(categoria)}
            {...props}
        >
          <img src={`../img/icono_${icono}.svg`} className="size-10" alt={`Icono icono`} /> {nombre}
        </button>
    );
}
