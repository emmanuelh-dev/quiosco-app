import useQuiosco from "../hooks/useQUiosco";
import PrimaryButton from "./PrimaryButton";
import ProductoMini from "./ProductoMini";

export default function Resumen() {
    const { showResume, pedido, handleLimpiarOrden, handlePedido } =
        useQuiosco();
    const totalPedido =
        pedido.length > 0
            ? pedido.reduce(
                  (total, producto) =>
                      total + producto.precio * producto.cantidad,
                  0
              )
            : 0;
    return (
        <aside id="sidebar" className={`fixed z-20 h-full top-0 right-0 pt-16 flex lg:flex flex-shrink-0 flex-col transition-width duration-75 w-0 ${showResume && "w-full lg:w-80"}`} aria-label="Sidebar"
        >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white p-4">
                <h2 className="text-4xl font-extrabold">Mi pedido</h2>
                <div>
                    {pedido.length > 0 ? (
                        <div className="space-y-4 mt-4 ">
                            {pedido.map((producto, index) => (
                                <ProductoMini producto={producto} key={index} />
                            ))}
                            <p className=" text-2xl">
                                <span className="font-bold">Total:</span>$
                                {totalPedido}
                            </p>
                            <PrimaryButton
                                onClick={() => handlePedido()}
                                className="bg-blue-500"
                            >
                                Hacer el pedido
                            </PrimaryButton>
                            <PrimaryButton
                                onClick={() => handleLimpiarOrden()}
                                className="bg-red-500 hover:bg-red-400"
                            >
                                Cancelar Orden
                            </PrimaryButton>
                        </div>
                    ) : (
                        <p className="pt-4">
                            Puedes comenzar agregando un producto
                        </p>
                    )}
                </div>
            </div>
        </aside>
    );
}
