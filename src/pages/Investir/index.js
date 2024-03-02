import "../../assets/css/investir.css"
import { useParams } from 'react-router-dom'
import Menu from "../Menu"
import React, { useEffect, useState } from 'react';
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
        ControlarBotão()
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

    let input1 = document.getElementById("valorcdb1")
    let input2 = document.getElementById("valorcdb2")
    let input3 = document.getElementById("valorcdb3")
    let input4 = document.getElementById("valoracao1")
    let input5 = document.getElementById("valoracao2")
    let input6 = document.getElementById("valoracao3")
    let check1 = document.getElementById("cdb1")
    let check2 = document.getElementById("cdb2")
    let check3 = document.getElementById("cdb3")
    let check4 = document.getElementById("acao1")
    let check5 = document.getElementById("acao2")
    let check6 = document.getElementById("acao3")
    let button = document.getElementById("btnInvestir")

    const desativarBotao = () => {
        button.style.opacity = '0.6';
        button.style.transition = 'none';
    }

    const ControlarBotão = () => {
        let redirecionar = true

        if
        (
            check1.checked === false &&
            check2.checked === false &&
            check3.checked === false &&
            check4.checked === false &&
            check5.checked === false &&
            check6.checked === false
        ){
            redirecionar = false
        } else {
            redirecionar = true

            if(check1.checked === true){
                if(redirecionar === true){
                    input1.value !== '' && parseFloat(input1.value) >= 100 ? redirecionar = true : redirecionar = false
                }
            }

            if(check2.checked === true){
                if(redirecionar === true){
                    input2.value !== '' && parseFloat(input2.value) >= 38 ? redirecionar = true : redirecionar = false
                }
            }

            if(check3.checked === true){
                if(redirecionar === true){
                    input3.value !== '' && parseFloat(input3.value) >= 142 ? redirecionar = true : redirecionar = false
                }
            }

            if(check4.checked === true){
                if(redirecionar === true){
                    input4.value !== '' && parseFloat(input4.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if(check5.checked === true){
                if(redirecionar === true){
                    input5.value !== '' && parseFloat(input5.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if(check5.checked === true){
                if(redirecionar === true){
                    input5.value !== '' && parseFloat(input5.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if(check6.checked === true){
                if(redirecionar === true){
                    input6.value !== '' && parseFloat(input6.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if (redirecionar === true){
                button.style.opacity = '1';
                button.style.transition = 'all 0.3';
            } else {
                desativarBotao()
            }
        }
    }
    
    useEffect(()=>{
        input1 = document.getElementById("valorcdb1")
        input2 = document.getElementById("valorcdb2")
        input3 = document.getElementById("valorcdb3")
        input4 = document.getElementById("valoracao1")
        input5 = document.getElementById("valoracao2")
        input6 = document.getElementById("valoracao3")
        check1 = document.getElementById("cdb1")
        check2 = document.getElementById("cdb2")
        check3 = document.getElementById("cdb3")
        check4 = document.getElementById("acao1")
        check5 = document.getElementById("acao2")
        check6 = document.getElementById("acao3")
        button = document.getElementById("btnInvestir")
        ControlarBotão()
    }, [])

    const Redirecionar = () => {
        let redirecionar = true

        if
        (
            check1.checked === false &&
            check2.checked === false &&
            check3.checked === false &&
            check4.checked === false &&
            check5.checked === false &&
            check6.checked === false
        ){
            redirecionar = false
        } else {
            redirecionar = true

            if(check1.checked === true){
                if(redirecionar === true){
                    input1.value !== '' && parseFloat(input1.value) >= 100 ? redirecionar = true : redirecionar = false
                }
            }

            if(check2.checked === true){
                if(redirecionar === true){
                    input2.value !== '' && parseFloat(input2.value) >= 38 ? redirecionar = true : redirecionar = false
                }
            }

            if(check3.checked === true){
                if(redirecionar === true){
                    input3.value !== '' && parseFloat(input3.value) >= 142 ? redirecionar = true : redirecionar = false
                }
            }

            if(check4.checked === true){
                if(redirecionar === true){
                    input4.value !== '' && parseFloat(input4.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if(check5.checked === true){
                if(redirecionar === true){
                    input5.value !== '' && parseFloat(input5.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if(check5.checked === true){
                if(redirecionar === true){
                    input5.value !== '' && parseFloat(input5.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if(check6.checked === true){
                if(redirecionar === true){
                    input6.value !== '' && parseFloat(input6.value) >= 0 ? redirecionar = true : redirecionar = false
                }
            }

            if (redirecionar === true){
                //window.location.href = `http://localhost:3000/Resultados/${userName}/${userSurname}`
                window.location.href = `https://simuladormatematicafinanceira.onrender.com/Resultados/${userName}/${userSurname}`
            } else {
                desativarBotao()
                alert("Preencha os campos corretamente")
            }
        }
    }

    return (

        <main id='Investir'>
        <Menu/>
        <section id='content'>

        <h1>Vamos Investir</h1>

            <section id='rendafixa'>

            <span className="tittleSpan"><h1>Renda Fixa - R$ {valores.rendaFixaValue}</h1><h1>Valor R$</h1></span>

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
                placeholder="Minimo: R$100.00"
                id='valorcdb1'
                className='valores'
                min='100'
                required
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
                    placeholder="Minimo: R$38.03"
                    id='valorcdb2'
                    className='valores'
                    min='38'
                    required
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
                    placeholder="Minimo: R$142.92"
                    id='valorcdb3'
                    className='valores'
                    min='142'
                    required
                    disabled
                />
                </label>


            </div>

            </section>

            <section id='rendavariavel'>

            <span className="tittleSpan"><h1>Renda Variavel - R$ {valores.rendaVariavelValue}</h1><h1>Número de cotas</h1></span>

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
                placeholder="0"
                id='valoracao1'
                className='valores'
                min='1'
                required
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
                    placeholder="0"
                    id='valoracao2'
                    className='valores'
                    min='1'
                    required
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
                    placeholder="0"
                    id='valoracao3'
                    className='valores'
                    min='1'
                    required
                    disabled
                />
                </label>


            </div>

            <br />

            <button onClick={() => {
                GuardarValores()
                Redirecionar()
                }} className='btn' id="btnInvestir">Continuar</button>

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

