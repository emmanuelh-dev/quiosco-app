import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
import { useEffect } from "react";

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActiva, setCategoriaActiva] = useState(categorias[2]);
    const [showResume, setShowResume] = useState(false);

    const handleCategoria = categoria => {
        setCategoriaActiva(categoria);
    }
    const handleShowResume = () => {
        console.log(showResume);
        setShowResume(!showResume);
    }
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActiva,
                handleCategoria,
                showResume,
                handleShowResume,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}

export { QuioscoProvider };
export default QuioscoContext;
