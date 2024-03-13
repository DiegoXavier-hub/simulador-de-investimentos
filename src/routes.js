import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import App from './App.js'
import Cadastro from './pages/Cadastro'
import Investir from './pages/Investir'
import Config from './functions/valores.js'
import Calcular from './functions/calculos.js'
import Results  from './pages/Resultados'
import Menu from './pages/Menu'

function RoutesApp() {
    return(
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Cadastrar" element={<Cadastro/>}/>
                <Route path="/Investir/:userName/:userSurname/:userInvestValue/:userInvestType" element={<Investir/>}/>
                <Route path="/Config/:userName/:userSurname" element={<Config/>}/>
                <Route path="/Calcular/:userName/:userSurname" element={<Calcular/>}/>
                <Route path="/results" element={<Results/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp