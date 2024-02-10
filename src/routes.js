import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import App from './App.js'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp