import Producto from "../components/Producto";
import { productos } from "../data/productos";
export default function Productos() {
    console.log(productos);
    return (
        <div className="flex flex-wrap gap-4">
            {productos.map((producto) => {
                return <Producto key={producto.id} producto={producto} />;
            })}
        </div>
    );
}
