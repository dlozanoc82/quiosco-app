import axios from "axios";
import { useState, useEffect, createContext } from "react";
const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);

    const getCategorias = async () => {
        const {data} = await axios('/api/categorias');
        setCategorias(data);
    }

    useEffect(() => {
        getCategorias();
    }, [])


    return(
        <QuioscoContext.Provider
            value={{
                categorias
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )

}

export {
    QuioscoProvider
}

export default QuioscoContext;