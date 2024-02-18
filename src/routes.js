import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import App from './App.js'
import Cadastro from './pages/Cadastro'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Investimentos/:userName-:surname-:investValue-:investType" element={<Cadastro/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp