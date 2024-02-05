import useSWR from "swr";
import axiosInstance from "../config/axios";
import Producto from "../components/Producto";

export default function Disponibilidad() {
    const token = localStorage.getItem("AUTH_TOKEN");
    const fetcher = () =>
        axiosInstance("/productos", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((datos) => datos.data);
    const { data:productos, error, isLoading } = useSWR("/productos", fetcher, {
        refreshInterval: 1000,
    });
    if (isLoading) return <p className="pt-6 px-4">Cargando...</p>;
    console.log(productos);
    return (
        <main>
            <div className="pt-6 px-4">
                  <div className="flex gap-4">
                    <h1 className="text-2xl font-extrabold ml-4">Disponibilidad</h1>
                    <p>Disponibles: <span>{productos.data.length}</span></p>
                  </div>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                {
                  productos.data.map(producto=>(
                    <Producto key={producto.id} producto={producto} botonDisponible/>
                  ))
                }
                </div>
            </div>
        </main>
    );
}
