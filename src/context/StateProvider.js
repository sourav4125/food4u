// context information
import React,{createContext,useContext,useReducer } from 'react';

export const StateContext=createContext();
export const StateProvider=({reducer,initialState,children})=>(  //children is component and other are two are coming from different files outside of this.

    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>

);
// CUSTOM HOOK to update state values
export const useStateValue=()=>useContext(StateContext)
    
