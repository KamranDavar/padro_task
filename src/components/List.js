import {Card} from './Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function List({items}) {
    return (<>
            <Grid item xs={12}  sx={styles.wrapper}>
                <Typography variant="h5" component="div" gutterBottom sx={styles.title}>
                    Tasks
                </Typography>

                <Grid spacing={2} sx={styles.album} container>
                    {items.map((item, i) => (
                        <Grid item key={i} xs={6} sm={4} md={3}>
                            <Card item={item}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

const styles = {
    title:{color: 'white'},
    wrapper: {
        backgroundColor: 'primary.main', marginTop: '1rem', padding: '1rem 0 0 1rem',
        borderRadius: '1.5rem'
    },
    album: {
        backgroundColor: '#8bc0fc', paddingRight: '1rem', paddingBottom: '1rem',
        borderRadius: '1.5rem 1.5rem 0 0', marginTop: '0'
    }
}
