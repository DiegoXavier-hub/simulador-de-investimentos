import React, { useState } from 'react'
import '../../assets/css/investimentos.css'

function Investimentos(){
    
    // Data de hoje
    const hoje = new Date();
    const diaAtual = `${String(hoje.getDate()).padStart(2, '0')}/${String(hoje.getMonth() + 1).padStart(2, '0')}/${hoje.getFullYear()}`;
    
    // Data daqui a exatamente 10 anos
    const dataDaqui10Anos = new Date();
    dataDaqui10Anos.setFullYear(dataDaqui10Anos.getFullYear() + 10);
    const dataFutura = `${String(dataDaqui10Anos.getDate()).padStart(2, '0')}/${String(dataDaqui10Anos.getMonth() + 1).padStart(2, '0')}/${dataDaqui10Anos.getFullYear()}`;

    // Quantos dias de hoje até 10 anos à frente
    const diffEmMilissegundos = dataDaqui10Anos - hoje;
    const diasValor = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));

    const anoDaqui10Anos = dataDaqui10Anos.getFullYear();

    return(
        <main id='Investimentos'>
            
            <h1>Renda Fixa</h1>
            
            <section className='invest-group' id='renda-fixa'>

                <div className='card'>
                    <h3>CDB Nubank 107% do CDI</h3>
                    <span>
                        <p>Investimento Mínimo</p>
                        <p>R$100,00</p>
                    </span>

                    <span>
                        <p>Rentabilidade</p>
                        <p>107% do CDI</p>
                    </span>

                    <span>
                        <p>Liquidez</p>
                        <p>no vcto.</p>
                    </span>

                    <span>
                        <p>Data de vencimento</p>
                        <p>{dataFutura}</p>
                    </span>

                    <span>
                        <p>Vence em</p>
                        <p>{diasValor} dias</p>
                    </span>

                    <span>
                        <div className='ir'>IR sobre o rendimento 
                            <div className='tooltip'>
                                <span className='icon'>?</span>
                                <h1>IR Sobre Rendimento</h1>
                                <span>
                                    <p>Até 6 meses</p>
                                    <p>22,5%</p>
                                </span>

                                <span>
                                    <p>Até 1 ano</p>
                                    <p>20%</p>
                                </span>

                                <span>
                                    <p>Até 2 anos</p>
                                    <p>17,5%</p>
                                </span>

                                <span>
                                    <p>Acima de 2 anos</p>
                                    <p>15%</p>
                                </span>
                            </div>
                        </div>
                        <p>22,5% a 15% de IR</p>
                    </span>

                    <span>
                        <p>IOF sobre rendimento</p>
                        <p>Isendo após 30 dias</p>
                    </span>

                    <span>
                        <p>Rating</p>
                        <p>Fitch AA</p>
                    </span>

                </div>

                <div className='card'>
                <h3>Tesouro Prefixado com Juros Semestrais {anoDaqui10Anos}</h3>
                    <span>
                        <p>Investimento Mínimo</p>
                        <p>R$39,03</p>
                    </span>

                    <span>
                        <p>Rentabilidade</p>
                        <p>10,64% a.a.</p>
                    </span>

                    <span>
                        <p>Liquidez</p>
                        <p>D + 1</p>
                    </span>

                    <span>
                        <p>Data de vencimento</p>
                        <p>{dataFutura}</p>
                    </span>

                    <span>
                        <p>Vence em</p>
                        <p>{diasValor} dias</p>
                    </span>

                    <span>
                        <div className='ir'>IR sobre o rendimento 
                            <div className='tooltip'>
                                <span className='icon'>?</span>
                                <h1>IR Sobre Rendimento</h1>
                                <span>
                                    <p>Até 6 meses</p>
                                    <p>22,5%</p>
                                </span>

                                <span>
                                    <p>Até 1 ano</p>
                                    <p>20%</p>
                                </span>

                                <span>
                                    <p>Até 2 anos</p>
                                    <p>17,5%</p>
                                </span>

                                <span>
                                    <p>Acima de 2 anos</p>
                                    <p>15%</p>
                                </span>
                            </div>
                        </div>
                        <p>22,5% a 15% de IR</p>
                    </span>

                    <span>
                        <p>IOF sobre rendimento</p>
                        <p>Isendo após 30 dias</p>
                    </span>

                </div>

                <div className='card'>
                <h3>Tesouro SELIC {anoDaqui10Anos}</h3>
                    <span>
                        <p>Investimento Mínimo</p>
                        <p>R$142,92</p>
                    </span>

                    <span>
                        <p>Rentabilidade</p>
                        <p>SELIC + 0,1588% a.a.</p>
                    </span>

                    <span>
                        <p>Liquidez</p>
                        <p>D + 1</p>
                    </span>

                    <span>
                        <p>Data de vencimento</p>
                        <p>{dataFutura}</p>
                    </span>

                    <span>
                        <p>Vence em</p>
                        <p>{diasValor} dias</p>
                    </span>

                    <span>
                        <div className='ir'>IR sobre o rendimento 
                            <div className='tooltip'>
                                <span className='icon'>?</span>
                                <h1>IR Sobre Rendimento</h1>
                                <span>
                                    <p>Até 6 meses</p>
                                    <p>22,5%</p>
                                </span>

                                <span>
                                    <p>Até 1 ano</p>
                                    <p>20%</p>
                                </span>

                                <span>
                                    <p>Até 2 anos</p>
                                    <p>17,5%</p>
                                </span>

                                <span>
                                    <p>Acima de 2 anos</p>
                                    <p>15%</p>
                                </span>
                            </div>
                        </div>
                        <p id='teste'>22,5% a 15% de IR</p>
                    </span>

                    <span>
                        <p>IOF sobre rendimento</p>
                        <p>Isendo após 30 dias</p>
                    </span>

                </div>
            </section>

            <h1>Renda Variável</h1>

            <section className='invest-group' id='renda-variavel'>
                <div className='card'>

                    <h3>VALE3</h3>
                    <h1>Variação dessa ação hoje</h1>

                    <div className='grafico' id='vale'>
                    </div>

                    <span>
                        <p>Empresa</p>
                        <p>VALE</p>
                    </span>

                    <span>
                        <p>Setor</p>
                        <p>Siderlurgia, Metalurgica</p>
                    </span>

                    <span>
                        <p>Tipo de ação</p>
                        <p>Ordinárias</p>
                    </span>
                </div>


                <div className='card'>
                    <h3>ITUB4</h3>
                    <h1>Variação dessa ação hoje</h1>
                    

                    <div className='grafico' id='itau'>
                    </div>

                    <span>
                        <p>Empresa</p>
                        <p>ITAU UNIBANCO</p>
                    </span>

                    <span>
                        <p>Setor</p>
                        <p>Bancos</p>
                    </span>

                    <span>
                        <p>Tipo de ação</p>
                        <p>Preferenciais</p>
                    </span>
                </div>


                <div className='card'>
                    <h3>BBAS3</h3>
                    <h1>Variação dessa ação hoje</h1>
                    

                    <div className='grafico' id='bb'>
                    </div>

                    <span>
                        <p>Empresa</p>
                        <p>BRASIL</p>
                    </span>

                    <span>
                        <p>Setor</p>
                        <p>Bancos</p>
                    </span>

                    <span>
                        <p>Tipo de ação</p>
                        <p>Ordinárias</p>
                    </span>
                </div>


            </section>

        </main> 
    )
}

export default Investimentos