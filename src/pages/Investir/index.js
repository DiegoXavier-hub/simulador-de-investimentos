import "../../assets/css/investir.css"
import { useParams } from 'react-router-dom'
import Menu from "../Menu"
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Investir() {
    
    const valores = {
        rendaFixaValue: 10,
        rendaVariavelValue: 30
    }

    let {userInvestValue} = useParams()
    let { userInvestType } = useParams()
    let {userName} = useParams()
    let { userSurname } = useParams()
    let value1, value2 = 0
    userInvestValue = parseFloat(userInvestValue)
    
    if (userInvestType === '1') {
        value1 =80
        value2 =20
        valores.rendaFixaValue = (userInvestValue * value1)/100
        valores.rendaVariavelValue = (userInvestValue * value2)/100
    } else if (userInvestType === '2') {
        value1 = 60
        value2 = 40
        valores.rendaFixaValue = (userInvestValue * value1)/100
        valores.rendaVariavelValue = (userInvestValue * value2)/100
    } else if (userInvestType === '3'){
        value1 = 30
        value2 = 70
        valores.rendaFixaValue = (userInvestValue * value1)/100
        valores.rendaVariavelValue = (userInvestValue * value2)/100
    }

    const data = {
        labels: ['Renda Fixa', 'Renda Variável'],
        datasets: [
            { 
                label: `invista aqui: R$`,
                lineTension: 0.1,
                data: [valores.rendaFixaValue, valores.rendaVariavelValue],
                backgroundColor: [
                'rgba(255, 0, 0, 0.3)',
                'rgba(0, 0, 250, 0.3)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    
    const options = {
        animation: {
            duration: 0
        }
    };

    function Grafico() {
        return <Pie data={data} options={options}/>;
    }

    const [investimentos, setInvestimentos] = useState({
        cdb1: 0,
        cdb2: 0,
        cdb3: 0,
        acao1: 0,
        acao2: 0,
        acao3: 0
    });

    const GuardarValores = () =>{
        localStorage.setItem("Investimentos", JSON.stringify(investimentos))
    }

    const handleInputChange = (event, cdbName) => {
        const { value } = event.target;
        setInvestimentos(prevState => ({
        ...prevState,
        [cdbName]: value
        }));
    };

    const AlterarInput = (check, input) =>{
        check.checked === true ? input.disabled = false : input.disabled = true
        input.disabled ? input.value = '' : input.value = input.value
    }

    return (

        <main id='Investir'>
        <Menu/>
        <section id='content'>

        <h1>Vamos Investir</h1>

            <section id='rendafixa'>

            <h1>Renda Fixa - R$ {valores.rendaFixaValue}</h1>

            <div>

                <label onClick={event => AlterarInput(document.getElementById("cdb1"), document.getElementById("valorcdb1"))}>
                <input
                    type="checkbox"
                    onChange={(event) => handleInputChange(event, 'cdb1')}
                    id='cdb1'
                    className='papeis'
                />
                <span>CDB Nubank</span>
                <input
                type="number"
                onChange={(event) => handleInputChange(event, 'cdb1')}
                placeholder="R$ 00.00"
                id='valorcdb1'
                className='valores'
                disabled
                />
                </label>

            </div>

            <br />

            <div>

                <label onClick={event => AlterarInput(document.getElementById("cdb2"), document.getElementById("valorcdb2"))}>

                <input
                    type="checkbox"
                    onChange={(event) => handleInputChange(event, 'cdb2')}
                    id='cdb2'
                    className='papeis'
                />
                <span>Tesouro Prefixado</span>

                <input
                    type="number"
                    onChange={(event) => handleInputChange(event, 'cdb2')}
                    placeholder="R$ 00.00"
                    id='valorcdb2'
                    className='valores'
                    disabled
                />

                </label>


            </div>

            <br />

            <div>
                
                <label onClick={event => AlterarInput(document.getElementById("cdb3"), document.getElementById("valorcdb3"))}>
                <input
                    type="checkbox"
                    onChange={(event) => handleInputChange(event, 'cdb3')}
                    id='cdb3'
                    className='papeis'
                />
                <span>Tesouro SELIC</span>
                <input
                    type="number"
                    onChange={(event) => handleInputChange(event, 'cdb3')}
                    placeholder="R$ 00.00"
                    id='valorcdb3'
                    className='valores'
                    disabled
                />
                </label>


            </div>

            </section>

            <section id='rendavariavel'>

            <h1>Renda Variavel - R$ {valores.rendaVariavelValue}</h1>

            <div>

                <label onClick={event => AlterarInput(document.getElementById("acao1"), document.getElementById("valoracao1"))}>
                <input
                    type="checkbox"
                    onChange={(event) => handleInputChange(event, 'acao1')}
                    id='acao1'
                    className='papeis'
                />
                <span>VALE3</span>
                <input
                type="number"
                onChange={(event) => handleInputChange(event, 'acao1')}
                placeholder="R$ 00.00"
                id='valoracao1'
                className='valores'
                disabled
                />
                </label>

            </div>

            <br />

            <div>

                <label onClick={event => AlterarInput(document.getElementById("acao2"), document.getElementById("valoracao2"))}>

                <input
                    type="checkbox"
                    onChange={(event) => handleInputChange(event, 'acao2')}
                    id='acao2'
                    className='papeis'
                />
                <span>ITUB4</span>

                <input
                    type="number"
                    onChange={(event) => handleInputChange(event, 'acao2')}
                    placeholder="R$ 00.00"
                    id='valoracao2'
                    className='valores'
                    disabled
                />

                </label>


            </div>

            <br />

            <div>
                
                <label onClick={event => AlterarInput(document.getElementById("acao3"), document.getElementById("valoracao3"))}>
                <input
                    type="checkbox"
                    onChange={(event) => handleInputChange(event, 'acao3')}
                    id='acao3'
                    className='papeis'
                />
                <span>BBAS3</span>

                <input
                    type="number"
                    onChange={(event) => handleInputChange(event, 'acao3')}
                    placeholder="R$ 00.00"
                    id='valoracao3'
                    className='valores'
                    disabled
                />
                </label>


            </div>

            <br />

            <a onClick={() => {
                console.log(investimentos)
                GuardarValores()
                }} className='btn' href={`https://simuladormatematicafinanceira.onrender.com/Resultados/${userName}/${userSurname}`}>Salvar</a>

            </section>

        </section>

        <section id='grafico'>
            <h1>Recomendamos que invista</h1>
            <Grafico/>
            <div>
            {value1}<h3>% em Renda Fixa</h3> <br/>
            {value2}<h3>% em Renda Variavel</h3> <br/>
            </div>
        </section>
        
        </main>
    );
}

export default Investir;

