import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Edit, Error404, Home} from '../pages'
import {Content, Header} from '../components'


export function AppRouter() {

    return (
        <BrowserRouter>
            <Header/>
            <Content>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:id" element={<Edit/>}/>
                    <Route element={<Error404/>}/>
                </Routes>
            </Content>
        </BrowserRouter>
    );
}
