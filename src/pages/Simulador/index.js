import '../../assets/css/simulador.css'
import Dinheiro from '../../assets/images/dinheiro.png'

function Simulador(){
    return(
        <main id='Simulador'>
            <div className='content'>
                <h1>Faça sua simulação de investimentos agora</h1>
                <a href='http://localhost:3000/Simulador' className='btn' target="_blank">Simular agora</a>
            </div>
            <img src={Dinheiro} alt="dinheiro"/>
        </main>
    )
}

export default Simulador