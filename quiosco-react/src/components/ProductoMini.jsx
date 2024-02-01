import React from "react";

export default function ProductoMini({ producto }) {
    const { nombre, precio, id, imagen } = producto;
    return (
        <div key={id} className="hover:bg-slate-100 rounded-md flex items-center overflow-clip">
            <img className="h-16" src={`../img/${imagen}.jpg`} alt={nombre} />
            <div className=" p-2">
                <h3 className="font-bold">{nombre}</h3>
                <p className="font-thin">{precio}</p>
            </div>
        </div>
    );
}
