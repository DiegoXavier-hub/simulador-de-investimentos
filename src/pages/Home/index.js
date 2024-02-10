import React from 'react'
import '../../assets/css/home.css'
import Grafico from "../../assets/images/grafico.png"
import Ufu from "../../assets/images/ufu.png"

function Home(){
    return(
        <main id='Home'>
            
            <h1>PROSPERINVEST</h1>
            <img className="ufu" src={Ufu} alt="ufu"/>
            <div id='content'>
                <img src={Grafico} alt="Gráfico"/>
                <span>
                    <h3>Alunos:</h3>
                    <p>Diego Xavier</p>
                    <p>Lucas Ramos</p>
                    <br/><br/>
                    <p>Matemática Financeira e Investimentos</p>
                    <br/><br/>
                    <p>Prof. Caterine Tizziotti</p>
                </span>
            </div>
            
        </main> 
    )
}

export default Home