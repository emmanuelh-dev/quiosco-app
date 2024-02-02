import React from "react";
import { TiDelete } from "react-icons/ti";
import useQuiosco from "../hooks/useQUiosco";

export default function ProductoMini({ producto }) {
    const { handleDelete } = useQuiosco();
    const { nombre, precio, id, imagen, cantidad } = producto;
    return (
        <div key={id} className="hover:bg-slate-100 rounded-md flex justify-between items-center overflow-clip h-16">
            <div className="flex items-center">
              <img className="w-20 object-cover" src={`../img/${imagen}.jpg`} alt={nombre} />
                <div className="ml-4">
                    <h3 className="font-bold">{cantidad} {nombre}</h3>
                    <p className="font-thin">{precio}</p>
                </div>
            </div>
            <div className="mr-4">
                <button onClick={()=>handleDelete(id)}>
                    <TiDelete className="text-3xl text-red-500"/>
                </button>
            </div>
            {/* <div className="flex">
                <button className="">-</button>
                <button className="">+</button>
            </div> */}
        </div>
    );
}
