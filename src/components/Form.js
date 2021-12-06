import {useParams} from 'react-router-dom';
import {Controller, useForm} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import {api} from '../api'
import {useContext} from 'react';
import {store} from '../globalState/store';
import {GET_TASKS} from '../globalState/typs';

export function Form({data}) {
    const globalState = useContext(store);
    const {dispatch} = globalState;
    const {id} = useParams()
    console.log(id)

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues:id?api.getTaskById(id): {
            title: '',
            description: '',
        }
    });
    const onSubmit = data => {
        function add(task) {
            api.createTask({...task, status: "ToDo", id: Date.now()})
            dispatch({type: GET_TASKS, payload: api.getAllTasks()})
        }

        function edit(task, id) {
            api.editTask({...task, id})
            dispatch({type: GET_TASKS, payload: api.getAllTasks()})
        }

        id ? edit(data, id) : add(data);
    };
    const title = id ? "Edit Task" : "Add a new Task"
    return (<>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="title"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <TextField
                        {...field}
                        error={!!errors.title}
                        helperText={!!errors.title && "required"}
                    />}
                />
                <Controller
                    name="description"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <TextField
                        {...field}
                        multiline
                        rows={4}
                        error={!!errors.description}
                        helperText={!!errors.description && "required"}
                    />}
                />
                {id &&
                <Controller
                    name="status"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <Select
                        {...field}
                    />}
                />
                }
                <input type="submit"/>
            </form>
        </>
    );
}
