import '../../assets/css/sobre.css'
// import Contatos from '../../assets/images/sobre.png'

function Sobre(){
    return(
        <main id='Sobre'>

            <div className='header' >
                <h1>SOBRE</h1>
                <h3>O Projeto*</h3>
            </div>

            
            <section className='section'>
                <div className='involved'>
                    <ul className='persons'>
                        <li><h1>Github</h1></li>
                        <li><a rel='noreferrer' href='https://github.com/DiegoXavier-hub/simulador-de-investimentos' target='_blank' >Projeto</a></li>
                        <li><a rel='noreferrer' href='https://github.com/DiegoXavier-hub' target='_blank' >Diego Xavier</a></li>
                        <li><a rel='noreferrer' href='https://github.com/lucasramosfs' target='_blank' >Lucas Ramos</a></li>
                    </ul>

                    <div className='sobre-img'>
                        
                    </div>
                    
                    <ul className='persons'>
                        <li><h1>Alunos</h1></li>
                        <li>Diego Henrique Xavier</li>
                        <li>Lucas Ramos Fernandes</li>
                        <br/>
                        <br/>
                        <li>Matemática Financeira e Investimentos</li>
                        <li>Prof. Catarine Tizziotti</li>
                    </ul>
                </div>

                <div className='references'>
                    <h1>Referências:</h1>
                    <ul className="references-list">
                        <li>​​A Bolsa do Brasil | B3. Disponível em: <a rel='noreferrer' target='_blank' href="https://www.b3.com.br/pt_br/institucional">b3.com.br</a>. Acesso em: 8 mar. 2024.  </li>
                        <li>​brapi - API de ações da bolsa de valores brasileira. Disponível em: <a rel='noreferrer' target='_blank' href="https://brapi.dev">brapi.dev</a>. Acesso em: 15 mar. 2024.  </li>
                        <li>​DA, S.; MENDES, R.; DE FORA, J. Análise de desempenho dos fundos de investimento de renda fixa e de renda variável no brasil entre 2015 e 2020. <a rel='noreferrer' target='_blank' href="https://app.uff.br">app.uff.br</a> , 2018a.  </li>
                        <li>DA, S.; MENDES, R.; DE FORA, J. ANÁLISE DE INVESTIMENTOS EM RENDA FIXA E VARIÁVEL.  <a rel='noreferrer' target='_blank' href="https://repositorio.ufjf.br">repositorio.ufjf.br</a> , 2018b.</li>
                        <li>​Investing.com Brasil - Finanças, Câmbio e Investimentos. Disponível em: <a rel='noreferrer' target='_blank' href="https://br.investing.com/">br.investing.com/</a>. Acesso em: 15 mar. 2024.  </li>
                        <li>​Me Poupe! Saiba como investir e como economizar dinheiro. Disponível em:  <a rel='noreferrer' target='_blank' href="https://mepoupe.com/simuladores/#simulador-de-investimento">mepoupe.com</a> . Acesso em: 15 mar. 2024.  </li>
                        <li>​Taxa do CDB: custos e rentabilidade do título. Disponível em: <a rel='noreferrer' target='_blank' href="https://www.onze.com.br/blog/taxa-do-cdb/#:~:text=Taxa%20cobrada%20no%20CDB&text=Assim%2C%20%C3%A9%20poss%C3%ADvel%20investir%20sem,aumentar%20o%20retorno%20ao%20investidor">www.onze.com.br</a>. Acesso em: 15 mar. 2024.  </li>
                        <li>​Tributação sobre ações: entenda como é feito o cálculo e quais são as alíquotas. Disponível em: <a rel='noreferrer' target='_blank' href="https://www.empiricus.com.br/explica/tributacao-sobre-acoes/">empiricus.com.br</a>. Acesso em: 15 mar. 2024.  </li>
                        <li>​XP Investimentos | Você no comando da sua vida financeira. Disponível em: <a rel='noreferrer' target='_blank' href="https://www.xpi.com.br/">xpi.com.br</a>. Acesso em: 8 mar. 2024.  </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Sobre