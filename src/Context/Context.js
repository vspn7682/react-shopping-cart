import { createContext, useReducer } from 'react'

//Data Layer
export const Context = createContext();

//Build a State Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        {children}
    </Context.Provider>
)   