import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
import { useEffect } from "react";

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActiva, setCategoriaActiva] = useState(categorias[2]);
    const [showCategories, setShowCategories] = useState(false);
    const [showResume, setShowResume] = useState(false);

    const handleCategoria = categoria => {
        setCategoriaActiva(categoria);
    }
    const handleShowResume = () => {
        console.log(showResume);
        setShowResume(!showResume);
    }
    const handleShowCategorias = () => {
        console.log(showCategories);
        setShowCategories(!showCategories);
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
                handleShowCategorias
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}

export { QuioscoProvider };
export default QuioscoContext;
