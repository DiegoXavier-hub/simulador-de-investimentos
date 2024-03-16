import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound/index.js'
import Private from './Private'
import App from '../App.js'
import Cadastro from '../pages/Cadastro/index.js'
import Investir from '../pages/Investir/index.js'
import Config from '../functions/valores.js'
import Calcular from '../functions/calculos.js'
import Results  from '../pages/Resultados/index.js'
import Login from '../pages/Login/index.js'
import Register from '../pages/Register/index.js'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Private><App/></Private>}/>
                <Route path="/cadastrar" element={<Private><Cadastro/></Private>}/>
                <Route path="/investir/:userInvestValue/:userInvestType" element={<Private><Investir/></Private>}/>
                <Route path="/config" element={<Private><Config/></Private>}/>
                <Route path="/calcular" element={<Private><Calcular/></Private>}/>
                <Route path="/results" element={<Private><Results/></Private>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp