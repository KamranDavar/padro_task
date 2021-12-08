import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme '




export function Content({children}) {
    return (<>
            <CssBaseline/>
            <Container sx={styles.container}>
                {children}
            </Container>
        </>
    );
}

const styles={
    container:{
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '0',
            paddingLeft: '0',
        },
    }
}
