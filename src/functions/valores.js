import React, {useState} from 'react'
import Menu from '../pages/Menu'
import '../assets/css/config.css'

function Config(){

    const [tempoAplicacao, setTempoAplicacao] = useState('10')
    const [taxaAdministrativa, setTaxaAdministrativa] = useState('0')
    const [valorSelic, setValorSelic] = useState('0.1125')
    const [valorCdi, setValorCdi] = useState('0.1286')
    const [taxaCustodia, setTaxaCustodia] = useState('0.002')

    let Variaveis = {
        tempoAplicacao,
        taxaAdministrativa,
        valorSelic,
        valorCdi,
        taxaCustodia
    }
    
    const GuardarValores = () =>{
        localStorage.setItem('Variaveis', JSON.stringify(Variaveis))
    }
    
    GuardarValores()
    
    return(
        <main id="Config">
            <Menu></Menu>
            <h1>CONFIGURAÇÕES</h1>

            <label>
                <span>Tempo de aplicação:</span>
                <input
                onChange={(event) => setTempoAplicacao(event.target.value)}
                type='text'
                id='tempodeaplicacao'
                required
                ></input>
            </label>

            <label>
                <span>Valor do SELIC:</span>
                <input
                onChange={(event) => setValorSelic(event.target.value)}
                type='text'
                id='valorselic'
                required
                ></input>
            </label>

            <label>
                <span>Taxa de administracão: </span>
                <input
                onChange={(event) => setTaxaAdministrativa(event.target.value)}
                type='text'
                id='taxaAdministrativa'
                required
                ></input>
            </label>

            <label>
                <span>Valor do CDI:</span>
                <input
                onChange={(event) => setValorCdi(event.target.value)}
                type='text'
                id='valordocdi'
                required
                ></input>
            </label>

            <label>
                <span>Taxa de Custodia:</span>
                <input
                onChange={(event) => setTaxaCustodia(event.target.value)}
                type='text'
                id='taxadeCustodia'
                required
                ></input>
            </label>

            <button onClick={()=>{GuardarValores()}}>Salvar</button>

        </main>
    )   
}

export default Config

