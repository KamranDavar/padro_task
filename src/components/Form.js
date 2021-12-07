import {useNavigate, useParams} from 'react-router-dom';
import {Controller, useForm} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import {api} from '../api'
import {useContext} from 'react';
import {store} from '../globalState/store';
import {GET_TASKS} from '../globalState/typs';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {MenuItem} from '@mui/material';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';



export function Form() {
    const globalState = useContext(store);
    const {dispatch} = globalState;
    const {id} = useParams()
    let navigate = useNavigate();
    let defaultValues = id ? api.getTaskById(id) : {
        title: '',
        description: '',
        status: '0',
    }
    console.log('defaultValues:', defaultValues)
    const {control, handleSubmit, formState: {errors}} = useForm({defaultValues});
    const onSubmit = data => {
        function add(task) {
            api.createTask({...task, status: "0", id: Date.now()})
            dispatch({type: GET_TASKS, payload: api.getAllTasks()})
        }

        function edit(task, id) {
            id = +id
            api.editTask({...task, id})
            dispatch({type: GET_TASKS, payload: api.getAllTasks()})
            navigate('/')
        }

        id ? edit(data, id) : add(data);
    };
    const title = id ? "Edit Task" : "Add a new Task"
    return (<>
            <Typography variant="h5" component="div" gutterBottom>
                {title}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                            name="title"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => <> <FormControl fullWidth> <TextField
                                {...field}
                                error={!!errors.title}
                                helperText={!!errors.title && "required"}
                                label="Title"
                                variant="filled"
                            /></FormControl></>}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{flexGrow: '1'}}>
                        <Controller
                            name="description"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => <> <FormControl fullWidth> <TextField
                                {...field}
                                multiline
                                rows={4}
                                error={!!errors.description}
                                helperText={!!errors.description && "required"}
                                label="Description"
                                variant="filled"
                            />
                            </FormControl></>}
                        />
                    </Grid>
                    {id &&
                    <Grid item xs={12}>
                        <Controller
                            name="status"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => <> <FormControl fullWidth>
                                {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                                <Select
                                    {...field}
                                    // labelId="demo-simple-select-label"
                                    // label="status"
                                    variant="filled"
                                    size='small'
                                >
                                    {statusOptions[defaultValues.status].map((item, index) => <MenuItem
                                        key={index} value={item}>{optionsLabel[item]}</MenuItem>)}
                                </Select>
                            </FormControl> </>}
                        />
                    </Grid>
                    }
                        <Grid item xs={id ? 6 : 12}>
                            <FormControl fullWidth>
                                <Button type="submit" variant='contained'><AddRoundedIcon/> ADD</Button>
                            </FormControl>
                        </Grid>
                        {id && <Grid item xs={6}>
                            <FormControl fullWidth>
                                <Button variant='outlined'
                                        onClick={() => navigate('/')}
                                >Cancel</Button>
                            </FormControl>
                        </Grid>}
                </Grid>
            </form>
        </>
    );
}

export const statusOptions =
    {
        0:
            ['1', '0'],
        1:
            ['2', '5', '1'],
        2:
            ['0', '3', '2'],
        3:
            ['4', '3'],
        4:
            ['4'],
        5:
            ['0', '5']
    }
export const optionsLabel =
    {
        0:
            'ToDo',
        1:
            'InProgress',
        2:
            'InQA',
        3:
            'Done',
        4:
            'Deployed',
        5:
            'Blocked'
    }