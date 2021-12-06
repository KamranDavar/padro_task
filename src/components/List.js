import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {store} from '../globalState/store';

export function List({items}) {
    const globalState = useContext(store);
    const {state} = globalState;
    const tasks = state.tasks;
    return (<>
            <Grid item xs={12}>
                <Typography variant="h5" component="div" gutterBottom>
                    Tasks
                </Typography>
            </Grid>
            <Grid spacing={2} container>
                {tasks.map((item, i) => (
                    <Grid item key={i} xs={6} sm={4} md={3}>
                        <Card
                            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                        >
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">{item.status}</Button>
                                <Link to={`/${item.id}`}> <Button size="small">Edit</Button></Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
