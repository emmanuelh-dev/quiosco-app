import { createContext, useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../config/axios";
const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
    const [categorias, setCategorias] = useState([]);
    const [categoriaActiva, setCategoriaActiva] = useState({});
    const [showCategories, setShowCategories] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [pedido, setPedido] = useState([]);
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
                handleDelete
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}

export { QuioscoProvider };
export default QuioscoContext;
