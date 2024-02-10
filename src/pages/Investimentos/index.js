import React from 'react'
import '../../assets/css/investimentos.css'

function Investimentos(){
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
                        <p>21/01/2026</p>
                    </span>

                    <span>
                        <p>Vence em</p>
                        <p>x dias</p>
                    </span>

                    <span>
                        <p className='ir'>IR sobre o rendimento 
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
                        </p>
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
                <h3>Tesouro Prefixado com Juros Semestrais 2033</h3>
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
                        <p>01/01/2033</p>
                    </span>

                    <span>
                        <p>Vence em</p>
                        <p>x dias</p>
                    </span>

                    <span>
                        <p className='ir'>IR sobre o rendimento 
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
                        </p>
                        <p>22,5% a 15% de IR</p>
                    </span>

                    <span>
                        <p>IOF sobre rendimento</p>
                        <p>Isendo após 30 dias</p>
                    </span>

                </div>

                <div className='card'>
                <h3>Tesouro SELIC 2029</h3>
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
                        <p>01/03/2026</p>
                    </span>

                    <span>
                        <p>Vence em</p>
                        <p>x dias</p>
                    </span>

                    <span>
                        <p className='ir'>IR sobre o rendimento 
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
                        </p>
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