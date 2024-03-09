import "../../assets/css/investir.css"
import { useParams } from 'react-router-dom'
import Menu from "../Menu"
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend);

function Investir() {
    
    const valores = {
        rendaFixaValue: 0,
        rendaVariavelValue: 0
    }

    let {userInvestValue, userInvestType, userName, userSurname} = useParams()
    let value1, value2 = 0
    userInvestValue = parseFloat(userInvestValue)
    
    if (userInvestType === '1') {
        value1 = 80
        value2 = 20
        
    } else if (userInvestType === '2') {
        value1 = 60
        value2 = 40
    } else if (userInvestType === '3'){
        value1 = 30
        value2 = 70
    }

    valores.rendaFixaValue = (userInvestValue * value1)/100
    valores.rendaVariavelValue = (userInvestValue * value2)/100

    const data = {
        labels: ['Renda Fixa', 'Renda Variável'],
        datasets: [
            { 
                label: `invista aqui: R$`,
                lineTension: 0.1,
                data: [valores.rendaFixaValue, valores.rendaVariavelValue],
                backgroundColor: [
                'rgb(95, 182, 76)',
                '#e75b2c',
                ],
                borderColor: [
                '#fff',
                '#fff',
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

    const GuardarValores = () => {
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
        input.disabled ? input.value = '' : input.value = input.value + ''
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

    const [vale3, setVale3] = useState(0.00)
    const [itub4, setItub4] = useState(0.00)
    const [bbas3, setBbas3] = useState(0.00)

    let [valorAcao1, setValorAcao1] = useState(vale3)
    let [valorAcao2, setValorAcao2] = useState(itub4)
    let [valorAcao3, setValorAcao3] = useState(bbas3)

    const ControlarBotão = () => {
        let redirecionar = true

        const partesInput1 = input1.value.split(';');
        const partesInput2 = input2.value.split(';');
        const partesInput3 = input3.value.split(';');

        setValorAcao1(vale3)
        if(investimentos.acao1 >= 0 && investimentos.acao1 != ''){
            setValorAcao1(investimentos.acao1*vale3)
        }
        
        setValorAcao2(itub4)
        if(investimentos.acao2 >= 0 && investimentos.acao2 != ''){
            setValorAcao2(investimentos.acao2*itub4)
        }

        setValorAcao3(bbas3)
        if(investimentos.acao3 >= 0 && investimentos.acao3 != ''){
            setValorAcao3(investimentos.acao3*bbas3)
        }

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
                    if(partesInput1[0].value !== '' && parseFloat(partesInput1[0]) >= 100)
                    { 
                        redirecionar = true
                        input1.style.border = "2px solid green"
                    } else {
                        redirecionar = false
                        input1.style.border = "1px solid red"
                    } 
                }
            }

            if(check2.checked === true){
                if(redirecionar === true){
                    if(partesInput2[0].value !== '' && parseFloat(partesInput2[0]) >= 38.03)
                    { 
                        redirecionar = true
                        input2.style.border = "2px solid green"
                    } else {
                        redirecionar = false
                        input2.style.border = "1px solid red"
                    } 
                }
            }

            if(check3.checked === true){
                if(redirecionar === true){
                    if(partesInput3[0].value !== '' && parseFloat(partesInput3[0]) >= 142.92)
                    { 
                        redirecionar = true
                        input3.style.border = "2px solid green"
                    } else {
                        redirecionar = false
                        input3.style.border = "1px solid red"
                    } 
                }
            }

            if(check4.checked === true){
                if(redirecionar === true){
                    if(input4.value !== '' && parseInt(input4.value) >= 1)
                    { 
                        redirecionar = true
                        input4.style.border = "2px solid green"
                    } else {
                        redirecionar = false
                        input4.style.border = "1px solid red"
                    } 
                }
            }

            if(check5.checked === true){
                if(redirecionar === true){
                    if(input5.value !== '' && parseInt(input5.value) >= 1)
                    { 
                        redirecionar = true
                        input5.style.border = "2px solid green"
                    } else {
                        redirecionar = false
                        input5.style.border = "1px solid red"
                    } 
                }
            }

            if(check6.checked === true){
                if(redirecionar === true){
                    if(input6.value !== '' && parseInt(input6.value) >= 1)
                    { 
                        redirecionar = true
                        input6.style.border = "2px solid green"
                    } else {
                        redirecionar = false
                        input6.style.border = "1px solid red"
                    } 
                }
            }

            if (redirecionar === true){
                button.style.cursor = 'pointer';
                button.style.opacity = '1';
                button.style.transition = 'all 0.3';
                return true
            } else {
                desativarBotao()
            }
        }
    }

    const atualizarComponente = () =>{
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
    }
    
    useEffect(()=>{
        atualizarComponente()
        ControlarBotão()

        const fetchData = async () => {
            const symbols = ['VALE3', 'ITUB4', 'BBAS3']
            for (let symbol of symbols){
                try{
                    const response = await axios.get(`https://brapi.dev/api/quote/${symbol}?token=azdVoKdmnG7896qe5DSC1r`)
                    const stockData = response.data.results[0]
                    switch(symbol){
                        case 'VALE3':
                            setVale3(stockData.regularMarketPrice)
                            break
                        case 'ITUB4':
                            setItub4(stockData.regularMarketPrice)
                            break
                        case 'BBAS3':
                            setBbas3(stockData.regularMarketPrice)
                            break
                        default:
                            break
                    }
                } catch (error) {
                    alert("fetching error: ", error)
                }
            }
        }

        fetchData()
    })

    const Redirecionar = () => {
        ControlarBotão()

            if (ControlarBotão() === true){
                window.location.href = `https://simuladormatematicafinanceira.onrender.com/Config/${userName}/${userSurname}`
            } else {
                desativarBotao()
                alert("Preencha os campos corretamente")
            }
    }

    return (

        <main id='Investir'>
        <Menu/>
        <section id='content'>

        <h1>Vamos Investir</h1>

            <section id='rendafixa'>

            <span className="tittleSpan"><h1>Renda Fixa - R$ {valores.rendaFixaValue.toFixed(2)}</h1><h1>Valor; Aportes (R$)</h1></span>

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
                type="text"
                onChange={(event) => handleInputChange(event, 'cdb1')}
                placeholder="Minimo: R$100.00; R$00.00"
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
                    type="text"
                    onChange={(event) => handleInputChange(event, 'cdb2')}
                    placeholder="Minimo: R$38.03; R$00.00"
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
                    type="text"
                    onChange={(event) => handleInputChange(event, 'cdb3')}
                    placeholder="Minimo: R$142.92; R$00.00"
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

            <span className="tittleSpan"><h1>Renda Variavel - R$ {valores.rendaVariavelValue.toFixed(2)}</h1><h1>Número de cotas</h1></span>

            <div>

                <label onClick={event => AlterarInput(document.getElementById("acao1"), document.getElementById("valoracao1"))}>
                <input
                    type="checkbox"
                    onChange={(event) => handleInputChange(event, 'acao1')}
                    id='acao1'
                    className='papeis'
                />
                <span>VALE3 - <br/>R$ {parseFloat(investimentos.acao1) <=1 ? vale3 : valorAcao1.toFixed(2)}</span>
                <input
                type="number"
                onChange={(event) => handleInputChange(event, 'acao1')}
                placeholder={'R$ ' + vale3}
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
                <span>ITUB4 - <br/>R$ {parseFloat(investimentos.acao2) <=1 ? itub4 : valorAcao2.toFixed(2)}</span> 

                <input
                    type="number"
                    onChange={(event) => handleInputChange(event, 'acao2')}
                    placeholder={'R$ ' + itub4}
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
                <span>BBAS3 -<br/> R$ {parseFloat(investimentos.acao3) <=1 ? bbas3 : valorAcao3.toFixed(2)}</span> 

                <input
                    type="number"
                    onChange={(event) => handleInputChange(event, 'acao3')}
                    placeholder={'R$ ' + bbas3}
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

