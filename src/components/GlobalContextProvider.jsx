import React, { useReducer, createContext } from 'react';


export const globalStateContext = createContext();

export const GlobalContextProvider = ({ reducer, initialState, children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <globalStateContext.Provider value={[state, dispatch]}>
            {children}
        </globalStateContext.Provider>
    );
}
