import React, {useEffect, useState} from 'react'
import '../../assets/css/home.css'
import Grafico from "../../assets/images/grafico.png"
import Ufu from "../../assets/images/ufu.png"
import '../../functions/valores.js'

function Home(){

    const [tempoAplicacao, setTempoAplicacao] = useState('2')
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
        <main id='Home'>
            
            <h1>PROSPERINVEST</h1>
            <img className="ufu" src={Ufu} alt="ufu"/>
            <div id='content'>
                <img src={Grafico} alt="Gráfico"/>
                <span>
                    <h3>Alunos:</h3>
                    <p>Diego Xavier</p>
                    <p>Lucas Ramos</p>
                    <br/><br/>
                    <p>Matemática Financeira e Investimentos</p>
                    <br/><br/>
                    <p>Prof. Caterine Tizziotti</p>
                </span>
            </div>
            
        </main> 
    )
}

export default Home