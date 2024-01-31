import Producto from "../components/Producto";
import Resumen from "../components/Resumen";
import { productos } from "../data/productos";
import useQuiosco from "../hooks/useQuiosco";
export default function Productos() {
    return (
        <div className="flex">
            <div className="flex flex-wrap gap-4 lg:max-w-[82rem] items-center justify-center">
                {productos.map((producto) => {
                    return <Producto key={producto.id} producto={producto} />;
                })}
            </div>
            <Resumen />
        </div>
    );
}
