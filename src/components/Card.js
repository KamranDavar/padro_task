import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import {optionsLabel} from './Form';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

export function Card({item}) {
    return (
        <MuiCard
            sx={styles.card}
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>

                <Typography variant="body2" sx={styles.desc}>
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions sx={styles.actions.wrapper}>
                <Box sx={styles.actions.status}>
                    {optionsLabel[item.status]}
                </Box>
                <Link style={styles.actions.edit} to={`/${item.id}`}>
                    <Button size="small"><EditIcon/></Button>
                </Link>
            </CardActions>
        </MuiCard>
    );
}

const styles = {
    card: {height: '200px', display: 'flex', flexDirection: 'column'},
    desc: {height: '70px', overflow: 'auto'},
    actions: {
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        status: {
            backgroundColor: 'primary.main', display: 'inline', padding: "0.5rem 1rem",
            borderRadius: '0.5rem', color: 'white'
        },
        edit: {float: 'flex-end'}
    }

}
