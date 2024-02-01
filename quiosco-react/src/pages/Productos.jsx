import Producto from "../components/Producto";
import Resumen from "../components/Resumen";
import useQuiosco from "../hooks/useQuiosco";
import { productos as data } from "../data/productos";
import { useEffect } from "react";
export default function Productos() {
    const { categoriaActiva } = useQuiosco();

    const productos = data.filter(
        (producto) => producto.categoria_id === categoriaActiva.id
    );

    useEffect(() => {}, [categoriaActiva]);

    return (
        <div className="flex">
            <div className="">
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {productos.map((producto) => {
                        return (
                            <Producto key={producto.id} producto={producto} />
                        );
                    })}
                </div>
            </div>
            <Resumen />
        </div>
    );
}
