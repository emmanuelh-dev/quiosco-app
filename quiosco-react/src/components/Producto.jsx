import PrimaryButton from "./PrimaryButton";

export default function Producto({ producto }) {
    const { nombre, precio, imagen, categoria_id, id } = producto;
    return (
        <div className="bg-white w-full md:max-w-[17rem] rounded-md shadow-md m-4 overflow-clip">
            <img src={`../img/${imagen}.jpg`} alt={nombre} />
            <div className="p-4">
                <h3 className="text-2xl font-extrabold">{nombre}</h3>
                <p className="font-extrabold text-amber-400 text-4xl">
                    ${precio}
                </p>
                <PrimaryButton className="bg-amber-400 mt-4">Agregar Producto</PrimaryButton>
            </div>
        </div>
    );
}
