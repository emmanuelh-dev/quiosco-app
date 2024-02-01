import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
import { useEffect } from "react";

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActiva, setCategoriaActiva] = useState(categorias[2]);

    const handleCategoria = categoria => {
        setCategoriaActiva(categoria);
    }
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActiva,
                handleCategoria,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}

export { QuioscoProvider };
export default QuioscoContext;
