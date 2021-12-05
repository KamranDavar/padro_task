import React, {createContext, useReducer} from 'react';
import {CHANGE_CURRENT_PAGE} from './typs';


const initialState = {
    currentPage: "Header"
};
const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case CHANGE_CURRENT_PAGE:
                return {...state, currentPage: action.payload};
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider}