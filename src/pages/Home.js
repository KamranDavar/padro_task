import React, {useContext, useEffect} from 'react';
import {store} from '../GlobalState/store';
import {CHANGE_CURRENT_PAGE} from '../GlobalState/typs';
import {Form} from '../components';

export function Home() {
    const globalState = useContext(store);
    const {dispatch} = globalState;

    useEffect(
        () => {
            dispatch({type: CHANGE_CURRENT_PAGE, payload: "Home"})
        }
        , [])

    return (
        <>
            <Form/>
        </>
    );
}