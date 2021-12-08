import React, {useContext, useEffect} from 'react';
import {store} from '../globalState/store';
import {CHANGE_CURRENT_PAGE} from '../globalState/typs';
import {Form, List} from '../components';

export function Home() {
    const globalState = useContext(store);
    const {dispatch, state} = globalState;

    useEffect(
        () => {
            dispatch({type: CHANGE_CURRENT_PAGE, payload: "Home"})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])
    const tasks = state.tasks;
    return (
        <div style={styles.container}>
            <Form/>
            <List items={tasks}/>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '94vh'
    }
}
