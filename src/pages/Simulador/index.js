import '../../assets/css/simulador.css'
import Dinheiro from '../../assets/images/dinheiro.png'

function Simulador(){
    return(
        <main id='Simulador'>
            <div className='content'>
                <h1>Faça sua simulação de investimentos agora</h1>
                <a href='https://simuladormatematicafinanceira.onrender.com/Cadastrar' className='btn'>Simular agora</a>
            </div>
            <img src={Dinheiro} alt="dinheiro"/>
        </main>
    )
}

export default Simulador