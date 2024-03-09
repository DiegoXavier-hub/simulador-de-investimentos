import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import App from './App.js'
import Cadastro from './pages/Cadastro'
import Investir from './pages/Investir'
import Config from './functions/valores.js'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Config" element={<Config/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Investir/:userName/:userSurname/:userInvestValue/:userInvestType" element={<Investir/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp