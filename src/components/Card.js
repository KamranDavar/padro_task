import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import {Link} from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import {optionsLabel} from './Form';
import {FaEdit} from 'react-icons/fa';

import theme from '../theme '

export function Card({item}) {
    return (
        <MuiCard
            sx={styles.card}
        >
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={[styles.title]}>
                    {item.title}
                </Typography>

                <Typography variant="body2" sx={styles.desc}>
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions sx={styles.actions.wrapper}>
                <Typography variant="button" sx={styles.actions.status}>
                    {optionsLabel[item.status]}
                </Typography>
                <Link to={`/${item.id}`}>
                    <FaEdit style={styles.edit}/>
                </Link>
            </CardActions>
        </MuiCard>
    );
}

const styles = {
    card: {
        height: '200px', display: 'flex', flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            height: '240px',
        },
        [theme.breakpoints.up('md')]: {
            height: '280px',
        },
    },
    title: {
        height: '20px', overflow: 'auto',
        [theme.breakpoints.up('sm')]: {
            height: '25px',
        },
        [theme.breakpoints.up('md')]: {
            height: '30px',
        },
    },
    desc: {
        height: '90px', overflow: 'auto',
        [theme.breakpoints.up('sm')]: {
            height: '120px',
        },
        [theme.breakpoints.up('md')]: {
            height: '150px',
        },
    },
    actions: {
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        status: {
            backgroundColor: 'primary.main', display: 'inline', padding: "0.3rem 0.6rem",
            borderRadius: '0.5rem', color: 'white'
        },
    },
    edit: {
        color: 'black', fontSize: '20px', marginRight: '0.5rem',
    },
}
