import useQuiosco from "../hooks/useQuiosco";
import PrimaryButton from "./PrimaryButton";

export default function Producto({ producto, botonAgregar = false, botonDisponible = false}) {
    const { nombre, precio, imagen, categoria_id, id } = producto;
    const {handleSetPedidos, handleDesactivarProducto} = useQuiosco();
    return (
        <div className="bg-white md:max-w-[20rem] rounded-md shadow-md m-4 overflow-clip">
            <img src={`../img/${imagen}.jpg`} alt={nombre} />
            <div className="p-4">
                <h3 className="text-2xl font-extrabold">{nombre}</h3>
                <p className="font-extrabold text-amber-400 text-4xl">
                    ${precio}
                </p>
                { botonAgregar &&<PrimaryButton className="bg-amber-400 mt-4" onClick={()=>handleSetPedidos(producto)}>Agregar Producto</PrimaryButton> }
                { botonDisponible &&<PrimaryButton className="bg-amber-400 mt-4" onClick={()=>handleDesactivarProducto(producto)}>{producto.disponible = 1 ? 'Desactivar' : 'Activar'}</PrimaryButton> }
            </div>
        </div>
    );
}
