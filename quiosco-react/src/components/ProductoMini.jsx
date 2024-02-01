import React from "react";

export default function ProductoMini({ producto }) {
    const { nombre, precio, id, imagen, cantidad } = producto;
    return (
        <div key={id} className="hover:bg-slate-100 rounded-md flex items-center overflow-clip h-16">
            <img className="w-20 object-cover" src={`../img/${imagen}.jpg`} alt={nombre} />
            <div className=" p-2">
                <h3 className="font-bold">{nombre}</h3>
                <p className="font-thin">{precio}</p>
            </div>
            <div className="flex">
                <button className="">-</button>
                {cantidad}
                <button className="">+</button>
            </div>
        </div>
    );
}
