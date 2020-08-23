// Set up the data layer
// We need this to track the basket
import React, {createContext, useContext , useReducer} from "react"

// This is the data layer
export const StateContext = createContext();

// Build a provider and wrap app inside it 
export const StateProvider=({reducer, initialState, children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {/* Children refers to the app because it is tucked inside */}
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);