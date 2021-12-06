import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


export function Content({children}) {
    return (<>
            <CssBaseline/>
            <Container>
                {children}
            </Container>
        </>
    );
}
