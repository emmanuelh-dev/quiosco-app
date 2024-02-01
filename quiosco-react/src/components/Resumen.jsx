import useQuiosco from "../hooks/useQUiosco";
import PrimaryButton from "./PrimaryButton";
import ProductoMini from "./ProductoMini";

export default function Resumen() {
    const { showResume, pedido, handleLimpiarOrden, handlePedido } = useQuiosco();
    const totalPedido = pedido.length > 0 ? pedido.reduce((total, producto) => total + producto.precio * producto.cantidad, 0) : 0;
    return (
        <aside
            className={`fixed max-sm:-right-10 lg:-right-6 bg-white  max-w-[30rem] p-4 h-screen border-l border-gray-200 w-0 transition-width duration-75 ${ showResume && "w-full" }`} >
              <div  className="max-h-[90vh] overflow-y-scroll">
              <h2 className="text-4xl font-extrabold">Mi pedido</h2>
              <div>
                  {pedido.length > 0 ? (
                      <div className="space-y-4 mt-4 ">
                          {pedido.map((producto, index) => (
                              <ProductoMini producto={producto} key={index} />
                          ))}
                          <p className=" text-2xl"><span className="font-bold">Total:</span>${totalPedido}</p>
                          <PrimaryButton
                              onClick={() => handlePedido()}
                              className=""
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
