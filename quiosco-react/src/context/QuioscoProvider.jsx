import { createContext, useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../config/axios";
import toast, { Toaster } from 'react-hot-toast';
const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
    const TOKEN = localStorage.getItem('AUTH_TOKEN');
    const [categorias, setCategorias] = useState([]);
    const [categoriaActiva, setCategoriaActiva] = useState({});
    const [showCategories, setShowCategories] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    const calcularTotal = ()=>{
        const totalPedido = pedido.reduce( (total, producto) => total + producto.precio * producto.cantidad, 0 );
        setTotal(totalPedido);
    }

    const handleCategoria = categoria => {
        setCategoriaActiva(categoria);
    }
    const handleShowResume = () => {
        setShowResume(!showResume);
    }
    const handleShowCategorias = () => {
        setShowCategories(!showCategories);
    }
    const handleSetPedidos = (producto) => {
        const existingProductIndex = pedido.findIndex((item) => item.id === producto.id);

        if (existingProductIndex !== -1) {
          const updatedPedido = [...pedido];
          updatedPedido[existingProductIndex].cantidad += 1;
          setPedido(updatedPedido);
        } else {
          setPedido([...pedido, { ...producto, cantidad: 1 }]);
        }
    };
    const handleDelete = (id) => {
        const updatedPedido = pedido.filter((item) => item.id !== id);
        setPedido(updatedPedido);
    }
    const handleLimpiarOrden = ()=>{
        setPedido([]);
    }
    const handlePedido =()=>{
        console.log(pedido);
    }
    const handleSubmitNuevaOrden = async()=>{
        try{
            await axiosInstance.post('/pedidos',{
                total,
                pedido: pedido.map(producto=>({producto_id:producto.id, cantidad:producto.cantidad}))
            }, {headers: { Authorization: `Bearer ${TOKEN}`}}).then((response)=>toast.success(response.data.message));
        } catch(err){
            console.error(err);
        }
    }
    const handleEntregado = async(id)=>{
        await axiosInstance.put('/pedidos/'+id, {status: 1}, {headers: {Authorization: `Bearer ${TOKEN}`}})
    }


    const obtenerCategorias = async ()=> {
        try {
            const {data} = await axiosInstance('/categorias');
            setCategorias(data.data);
            setCategoriaActiva(data.data[0]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        obtenerCategorias();
    },[])
    useEffect(()=>{
        calcularTotal();
    },[pedido])

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActiva,
                handleCategoria,
                showResume,
                handleShowResume,
                showCategories,
                handleShowCategorias,
                handleSetPedidos,
                pedido,
                handleLimpiarOrden,
                handlePedido,
                handleDelete,
                total,
                handleSubmitNuevaOrden,
                handleEntregado
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}

export { QuioscoProvider };
export default QuioscoContext;
