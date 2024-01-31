import { createContext } from "react";

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
    const hola = "hola";
    return (
        <QuioscoContext.Provider value={{hola}}>{children}</QuioscoContext.Provider>
    );
}


export {
    QuioscoProvider,
}
export default QuioscoContext;