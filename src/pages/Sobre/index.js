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
                        <li><a href='https://github.com/DiegoXavier-hub/Simulador' target='_blank' >Projeto</a></li>
                        <li><a href='https://github.com/DiegoXavier-hub' target='_blank' >Diego Xavier</a></li>
                        <li><a href='https://github.com/lucasramosfs' target='_blank' >Lucas Ramos</a></li>
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
                </div>
            </section>

        

        </main>
    )
}

export default Sobre