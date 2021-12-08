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
import {IoAdd} from 'react-icons/io5';
import {FaEdit} from 'react-icons/fa';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../theme '


export function Form() {
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

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
    return (<div style={styles.wrapper}>
            <Typography variant="h5" component="div" gutterBottom sx={styles.title}>
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
                                rows={!id ? 4 : isMobile ? 4 : 14}
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
                                <Select
                                    {...field}

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
                            <Button type="submit" variant='contained' size="large" sx={styles.button}>
                                {id ? <><FaEdit style={styles.icon}/> Edit</> : <><IoAdd
                                    sx={styles.icon}/> Add</>}
                            </Button>
                        </FormControl>
                    </Grid>
                    {id && <Grid item xs={6}>
                        <FormControl fullWidth>
                            <Button variant='outlined'
                                    onClick={() => navigate('/')}
                                    size="large"
                                    sx={styles.button}
                            >Cancel</Button>
                        </FormControl>
                    </Grid>}
                </Grid>
            </form>
        </div>
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
export const styles = {
    wrapper: {
        padding: '0 2rem 0 2rem',
    },
    title: {
        paddingTop: '1rem', paddingBottom: '1rem',
    },
    button: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    icon: {fontSize: '16px', marginRight:'0.5rem'},
}