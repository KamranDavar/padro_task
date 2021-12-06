import React, {createContext, useReducer} from 'react';
import {CHANGE_CURRENT_PAGE,GET_TASKS} from './typs';
import {api} from '../api';


const initialState = {
    currentPage: "Header",
    tasks: api.getAllTasks()
};
const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case CHANGE_CURRENT_PAGE:
                return {...state, currentPage: action.payload};
                case GET_TASKS:
                return {...state, tasks: action.payload};
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider}