import React, {useContext, useEffect} from 'react';
import {CHANGE_CURRENT_PAGE} from '../GlobalState/typs';
import {store} from '../GlobalState/store';
import {Form} from '../components'

export function Edit() {
    const globalState = useContext(store);
    const {dispatch} = globalState;

    useEffect(
        () => {
            dispatch({type: CHANGE_CURRENT_PAGE, payload: "Edit"})
        }
        , [])
    return (
        <>
            <Form/>
        </>
    );
}