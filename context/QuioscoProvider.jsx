const { useState, useEffect, createContext } = require("react");

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    return(
        <QuioscoContext.Provider
            value={{

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