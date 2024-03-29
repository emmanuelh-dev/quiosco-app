import useQuiosco from '../hooks/useQuiosco';
import PrimaryButton from '../components/PrimaryButton';
export default function PedidosCard({ pedido }) {
    const { created_at, id, status, total, productos, user,  } = pedido;
    const {handleEntregado} = useQuiosco();
    return (
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
            <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
                Pedido #{id}
            </p>
            <p className="blueberry font-semibold text-gray-600 text-xs">
                {user.name}
            </p>
            <p className="blueberry font-semibold text-gray-600 text-xs">
                {productos.length > 0 ? (
                  <div>
                    {productos.map((producto, index) => (
                      <div key={index}>
                        {producto.nombre} x {producto.cantidad}
                      </div>
                    ))}
                  </div>
                ) : 'No hay productos'}
            </p>
            <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
                ${total}
            </p>
            <PrimaryButton onClick={()=>handleEntregado(id)}>
                Entregado
            </PrimaryButton>
        </div>
    );
}
