import {Card} from './Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function List({items}) {
    return (
        <Grid item xs={12} sx={styles.wrapper}>
            <Typography variant="h3" component="div" gutterBottom sx={styles.title}>
                Tasks
            </Typography>

            <Grid spacing={2} sx={styles.album} container>
                {items.length === 0 ? <div style={styles.centerTextWrapper}><Typography sx={styles.centerText}>
                        You have nothing to do.<br/>
                        Go get some sleep.
                    </Typography></div> :
                    items.map((item, i) => (
                        <Grid item key={i} xs={6} sm={4} md={3}>
                            <Card item={item}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    );
}

const styles = {
    title: {color: 'white', paddingLeft: '1rem',},
    wrapper: {
        backgroundColor: 'primary.main', marginTop: '1rem', padding: '1rem 0 0 1rem',
        borderRadius: '1.5rem 1.5rem 0 0', flexGrow: '3',
        display:'flex',
        flexDirection:'column',
    },
    album: {
        backgroundColor: '#8bc0fc', padding: '1rem 2rem 2rem 1rem',
        borderRadius: '1.5rem 1.5rem 0 0', marginTop: '0', display: 'flex', justifyContent: 'start',
        flexGrow: '1'
    },
    centerTextWrapper:{
        width:'100vw',
        height: '100%',
        display:'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        textAlign:'center'
    }
}
