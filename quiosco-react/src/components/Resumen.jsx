import useQuiosco from "../hooks/useQUiosco";
import PrimaryButton from "./PrimaryButton";
import ProductoMini from "./ProductoMini";

export default function Resumen() {
    const { showResume, pedido, handleLimpiarOrden } = useQuiosco();

    return (
        <aside className={`fixed right-0 bg-white w-full max-w-[20rem] p-4 h-screen border-l border-gray-200 ${!showResume && "hidden"}`}>
            <h2 className="text-4xl font-extrabold">Mi pedido</h2>
            {pedido.length > 0 ? (
                <div className="space-y-4 mt-4">
                  {
                    pedido.map((producto, index) => (
                      <ProductoMini producto={producto} key={index}/>
                    ))
                  }
                  <PrimaryButton onClick={()=>handleLimpiarOrden()} className="">Hacer el pedido</PrimaryButton>
                  <PrimaryButton onClick={()=>handleLimpiarOrden()} className="bg-red-500 hover:bg-red-400">Cancelar Orden</PrimaryButton>
                </div>
            ) : (
                <p className="pt-4">Puedes comenzar agregando un producto</p>
            )}
        </aside>
    );
}
