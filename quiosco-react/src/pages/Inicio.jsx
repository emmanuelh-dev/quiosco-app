import { useEffect } from "react";
import Producto from "../components/Producto";
import Resumen from "../components/Resumen";
import useQuiosco from "../hooks/useQuiosco";
import useSWR from "swr";

import axiosInstance from "../config/axios";

export default function Inicio() {
    const { categoriaActiva } = useQuiosco();
    const TOKEN = localStorage.getItem("AUTH_TOKEN");
    const fetcher = () => axiosInstance('productos', {headers: {Authorization: `Bearer ${TOKEN}`}}).then(data => data.data);

    // SWR
    const { data, error, isLoading } = useSWR('productos', fetcher, {
        refreshInterval: 1000,
    });

    if (isLoading)
        return (
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
        );

    const productos = data.data.filter( (producto) => producto.categoria_id === categoriaActiva.id );


    return (
        <div className="flex">
            <div className="">
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {productos.map((producto) => {
                        return (
                            <Producto key={producto.id} producto={producto} botonAgregar/>
                        );
                    })}
                </div>
            </div>
            <Resumen />
        </div>
    );
}
