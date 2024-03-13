import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import '../assets/css/config.css'

function Config(){

    

    let {userName, userSurname} = useParams()

    const [tempoAplicacao, setTempoAplicacao] = useState('10')
    const [taxaAdministrativa, setTaxaAdministrativa] = useState('0')
    const [taxaAdministrativaAcoes, setTaxaAdministrativaAcoes] = useState('0.002')
    const [valorSelic, setValorSelic] = useState('0.1125')
    const [valorCdi, setValorCdi] = useState('0.1286')
    const [taxaCustodia, setTaxaCustodia] = useState('0.002')   
    const [precoDividendosItub, setPrecoDividendosItub] = useState(1.125125/4)
    const [precoDividendosVale, setprecoDividendosVale] = useState(1.565890809/4)
    const [precoDividendosBbas, setprecoDividendosBbas] = useState(0.22474133412)


    let Variaveis = {
        tempoAplicacao,
        taxaAdministrativa,
        taxaAdministrativaAcoes,
        valorSelic,
        valorCdi,
        taxaCustodia,
        precoDividendosItub,
        precoDividendosVale,
        precoDividendosBbas
    }
    
    const GuardarValores = () =>{
        localStorage.setItem('Variaveis', JSON.stringify(Variaveis))
    }
    
    GuardarValores()
    
    return(
        <main id="Config">
            <h1>CONFIGURAÇÕES</h1>

            <label>
                <span>Tempo de aplicação: {tempoAplicacao}</span>
                <input
                onChange={(event) => setTempoAplicacao(event.target.value)}
                type='text'
                id='tempodeaplicacao'
                required
                ></input>
            </label>

            <label>
                <span>Valor do SELIC: {valorSelic}</span>
                <input
                onChange={(event) => setValorSelic(event.target.value)}
                type='text'
                id='valorselic'
                required
                ></input>
            </label>

            <label>
                <span>Taxa administrativa: {taxaAdministrativa}</span>
                <input
                onChange={(event) => setTaxaAdministrativa(event.target.value)}
                type='text'
                id='taxaAdministrativa'
                required
                ></input>
            </label>

            <label>
                <span>Taxa administrativa para ações: {taxaAdministrativaAcoes}</span>
                <input
                onChange={(event) => setTaxaAdministrativaAcoes(event.target.value)}
                type='text'
                id='taxaAdministrativa'
                required
                ></input>
            </label>

            <label>
                <span>Valor do CDI: {valorCdi}</span>
                <input
                onChange={(event) => setValorCdi(event.target.value)}
                type='text'
                id='valordocdi'
                required
                ></input>
            </label>

            <label>
                <span>Taxa de Custodia: {taxaCustodia}</span>
                <input
                onChange={(event) => setTaxaCustodia(event.target.value)}
                type='text'
                id='taxadeCustodia'
                required
                ></input>
            </label>

            <label>
                <span>Valor trimestral de dividendos VALE3: R${precoDividendosVale.toFixed(6)}</span>
                <input
                onChange={(event) => setprecoDividendosVale(event.target.value)}
                type='text'
                id='precoDividendosVale'
                required
                ></input>
            </label>

            <label>
                <span>Valor trimestral de dividendos ITUB4: R${precoDividendosItub.toFixed(6)}</span>
                <input
                onChange={(event) => setPrecoDividendosItub(event.target.value)}
                type='text'
                id='precoDividendosItub'
                required
                ></input>
            </label>

            <label>
                <span>Valor trimestral de dividendos BBAS3: R${precoDividendosBbas.toFixed(6)}</span>
                <input
                onChange={(event) => setprecoDividendosBbas(event.target.value)}
                type='text'
                id='precoDividendosBbas'
                required
                ></input>
            </label>

            <button onClick={()=>{
                    GuardarValores()
                    window.location.href = `http://localhost:3000/Calcular/${userName}/${userSurname}`
                }
            }>Salvar</button>

        </main>
    )   
}

export default Config

