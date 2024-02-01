import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
import { useEffect } from "react";

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActiva, setCategoriaActiva] = useState(categorias[2]);
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

    const handleLimpiarOrden = ()=>{
        setPedido([]);
    }
    const handlePedido =()=>{
        console.log(pedido);
    }
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
                handlePedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}

export { QuioscoProvider };
export default QuioscoContext;
