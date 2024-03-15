// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/resultados.css'
import Rodape from '../Rodape'
import { Chart as ChartJS,
    LineElement, 
    CategoryScale, 
    LinearScale,
    PointElement
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Results(){
    const [resultados, setResultados] = useState(
        {
            "cdb1": {
                "id": "CdbNubank",
                "tempo": 0,
                "rendimentoTotal": 0,
                "impostos": 0,
                "ir": 0,
                "valorInvestidoComOTempo": 0,
                "taxaCustodia": 0,
                "taxaAdministrativa": 0,
                "rendimentoLiquido": 0,
                "valorLiquido?": 0,
                "valorBruto": 0
            },
            "cdb2": {
                "id": "TesouroPrefixado",
                "tempo": 0,
                "rendimentoTotal": 0,
                "impostos": 0,
                "ir": 0,
                "valorInvestidoComOTempo": 0,
                "taxaCustodia": 0,
                "taxaAdministrativa": 0,
                "rendimentoLiquido": 0,
                "valorLiquido?": 0,
                "valorBruto": 0
            },
            "cdb3": {
                "id": "TesouroSelic",
                "tempo": 0,
                "rendimentoTotal": 0,
                "impostos": 0,
                "ir": 0,
                "valorInvestidoComOTempo": 0,
                "taxaCustodia": 0,
                "taxaAdministrativa": 0,
                "rendimentoLiquido": 0,
                "valorLiquido?": 0,
                "valorBruto": 0
            },
            "acao1": {
                "id": "VALE3",
                "tempo": 0,
                "redimentoPorAcaoBruto": 0,
                "rendimentoPorAcaoLiquido": 0,
                "redimentoTotalBruto": 0,
                "impostos": 0,
                "ir": 0,
                "valorInvestidoComOTempo": 0,
                "taxaAdministrativa": 0,
                "rendimentoLiquido": 0,
                "valorLiquido?": 0,
                "valorBruto": 0
            },
            "acao2": {
                "id": "ITUB4",
                "tempo": 0,
                "redimentoPorAcaoBruto": 0,
                "rendimentoPorAcaoLiquido": 0,
                "redimentoTotalBruto": 0,
                "impostos": 0,
                "ir": 0,
                "valorInvestidoComOTempo": 0,
                "taxaAdministrativa": 0,
                "rendimentoLiquido": 0,
                "valorLiquido?": 0,
                "valorBruto": 0
            },
            "acao3": {
                "id": "BBAS3",
                "tempo": 0,
                "redimentoPorAcaoBruto": 0,
                "rendimentoPorAcaoLiquido": 0,
                "redimentoTotalBruto": 0,
                "impostos": 0,
                "ir": 0,
                "valorInvestidoComOTempo": 0,
                "taxaAdministrativa": 0,
                "rendimentoLiquido": 0,
                "valorLiquido?": 0,
                "valorBruto": 0
            }
        }        
    ) 

    const data = {
        labels: [resultados.cdb1?.id, resultados.cdb2?.id, resultados.cdb3?.id, resultados.acao1?.id, resultados.acao2.id, resultados.acao3?.id],
        datasets: [
            { 
                label: `Valor: R$`,
                lineTension: 0.1,
                data: [resultados.cdb1?.valorLiquido?.toFixed(2), resultados.cdb2?.valorLiquido?.toFixed(2), resultados.cdb3?.valorLiquido?.toFixed(2), resultados.acao1?.valorLiquido?.toFixed(2), resultados.acao2?.valorLiquido?.toFixed(2), resultados.acao3?.valorLiquido?.toFixed(2)],
                backgroundColor: [
                    '#ff9a9e',
                    '#66a6ff',
                    '#764ba2',
                    '#ad5389',
                    '#3c1053',
                    '#dd1818',
                ],
                borderColor: [
                '#fff',
                ],
                borderWidth: 1,
            },
        ], 
    };
    
    const options = {
        animation: {
            duration: 1500
        }
    };

    function GraficoPatrimonio() {
        return <Pie data={data} options={options}/>;
    }

    const dataFixa = {
        labels: ['1° ano', 'Ano do resgate'],
        datasets:[
            {
            label: resultados.cdb1?.id,
            data:[resultados.cdb1?.valorInvestidoComOTempo?.toFixed(2), resultados.cdb1?.valorLiquido?.toFixed(2)],
            backgroundColor: '#66a6ff',
            borderColor:'#66a6ff',
            borderWidth: 3,
        },
        {
            label: resultados.cdb2?.id,
            data:[resultados.cdb2?.valorInvestidoComOTempo?.toFixed(2), resultados.cdb2?.valorLiquido?.toFixed(2)],
            backgroundColor: '#764ba2',
            borderColor:'#764ba2',
            borderWidth: 3,
        },
        {
            label: resultados.cdb3?.id,
            data:[resultados.cdb3?.valorInvestidoComOTempo?.toFixed(2), resultados.cdb3?.valorLiquido?.toFixed(2)],
            backgroundColor: '#ad5389',
            borderColor:'#ad5389',
            borderWidth: 3,
        }
    ],
    }

    const dataVariavel = {
        labels: ['1° ano', 'Ano do resgate'],
        datasets:[
            {
            label: resultados.acao1?.id,
            data:[resultados.acao1?.valorInvestidoComOTempo?.toFixed(2), resultados.acao1?.valorLiquido?.toFixed(2)],
            backgroundColor: '#ff9a9e',
            borderColor: '#ff9a9e',
            borderWidth: 3,
        },
        {
            label: resultados.acao2?.id,
            data:[resultados.acao2?.valorInvestidoComOTempo?.toFixed(2), resultados.acao2?.valorLiquido?.toFixed(2)],
            backgroundColor: '#3c1053',
            borderColor:'#3c1053',
            borderWidth: 3,
        },
        {
            label: resultados.acao3?.id,
            data:[resultados.acao3?.valorInvestidoComOTempo?.toFixed(2), resultados.acao3?.valorLiquido?.toFixed(2)],
            backgroundColor: '#dd1818',
            borderColor:'#dd1818',
            borderWidth: 3,
        }
    ],
    }

    const optionsLine = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
    
                // grid line settings
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
    };
    
    
    useEffect(()=>{
        const resultados = localStorage.getItem('Resultados')
        if(resultados){
            setResultados(JSON.parse(resultados))
        }

    },[])
    
    return(
    
        <main id="Resultados">
            <h1>Agora seus resultados</h1>
            <div className='grafico-patrimonio' id='grafico-patrimonio'>
                <h2>Seu Patrimônio</h2>
                <GraficoPatrimonio/>
            </div>

            <div className='grafico-patrimonio fixa-variavel' id='renda-fixa-graph'>
                <h2>Renda Fixa</h2>
                <Line data={dataFixa} options={optionsLine}/>

                <div className='infos-container'>
                    <span>
                        <p>Valor que você investiu:</p>
                        <p className='Infos'>R$ {
                            (parseFloat(resultados.cdb1?.valorInvestidoComOTempo) +
                            parseFloat(resultados.cdb2?.valorInvestidoComOTempo)+
                            parseFloat(resultados.cdb3?.valorInvestidoComOTempo)).toFixed(2)
                            }
                        </p>
                    </span>
                    <span>
                        <p>Valor que você pagou de impostos:</p>
                        <p className='Infos'>R$ {
                            (parseFloat(resultados.cdb1?.impostos) +
                            parseFloat(resultados.cdb2?.impostos)+
                            parseFloat(resultados.cdb3?.impostos)).toFixed(2)
                            }
                        </p>
                    </span>
                    <span>
                        <p>Valor bruto total:</p>
                        <p className='Infos'>R$ {
                            (parseFloat(resultados.cdb1?.valorBruto) +
                            parseFloat(resultados.cdb2?.valorBruto)+
                            parseFloat(resultados.cdb3?.valorBruto)).toFixed(2)
                            }
                        </p>
                    </span>
                    <span>
                        <p>Valor Liquido total::</p>
                        <p className='Infos result'>R$ {
                            (parseFloat(resultados.cdb1?.valorLiquido) +
                            parseFloat(resultados.cdb2?.valorLiquido)+
                            parseFloat(resultados.cdb3?.valorLiquido)).toFixed(2)
                            }
                        </p>
                    </span>
                </div>

            </div>

            <div className='grafico-patrimonio fixa-variavel' id='renda-variavel-graph'>
                <h2>Renda Variável</h2>
                <Line data={dataVariavel} options={optionsLine}/>

                <div className='infos-container'>
                    <span>
                        <p>Valor que você investiu:</p>
                        <p className='Infos'>R$ {
                            (parseFloat(resultados.acao1?.valorInvestidoComOTempo) +
                            parseFloat(resultados.acao2?.valorInvestidoComOTempo)+
                            parseFloat(resultados.acao3?.valorInvestidoComOTempo)).toFixed(2)
                            }
                        </p>
                    </span>
                    <span>
                        <p>Valor que você pagou de impostos:</p>
                        <p className='Infos'>R$ {
                            (parseFloat(resultados.acao1?.impostos) +
                            parseFloat(resultados.acao2?.impostos)+
                            parseFloat(resultados.acao3?.impostos)).toFixed(2)
                            }
                        </p>
                    </span>
                    <span>
                        <p>Rendimento liquido total:</p>
                        <p className='Infos'>R$ {
                            (parseFloat(resultados.acao1?.rendimentoLiquido) +
                            parseFloat(resultados.acao2?.rendimentoLiquido)+
                            parseFloat(resultados.acao3?.rendimentoLiquido)).toFixed(2)
                            }
                        </p>
                    </span>
                    <span>
                        <p>Valor Liquido total::</p>
                        <p className='Infos result'>R$ {
                            (parseFloat(resultados.acao1?.valorLiquido) +
                            parseFloat(resultados.acao2?.valorLiquido)+
                            parseFloat(resultados.acao3?.valorLiquido)).toFixed(2)
                            }
                        </p>
                    </span>
                </div>

            </div>

            <Rodape/>
        </main>
    )

}

export default Results