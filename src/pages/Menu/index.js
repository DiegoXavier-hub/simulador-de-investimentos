import React from 'react'
import '../../assets/css/menu.css'
import Logo from "../../assets/images/logo.png"
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

function Menu(){
    return(
        <nav id='Menu'>
            <div className='mobile-Menu' id='mobile-Menu' onClick={
                ()=>{
                    document.getElementById("Menu-back").classList.toggle("activated")
                    document.getElementById("Menu-items").classList.toggle("activated")
                }
            }>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            
            <div className='Menu-back' id='Menu-back'></div>

            <ul className='Menu' id='Menu-items'>
                <li className='logo'><a href='https://simuladormatematicafinanceira.onrender.com/' id='logo'><img src={Logo} alt="logo">
                    </img><span><h3>PROSPER</h3><h3>INVEST</h3></span></a>
                </li>
                
                <li><a href='https://simuladormatematicafinanceira.onrender.com/#Home'>HOME</a></li>
                <li><a href='https://simuladormatematicafinanceira.onrender.com/#Simulador'>SIMULADOR</a></li>
                <li><a href='https://simuladormatematicafinanceira.onrender.com/#Investimentos'>INVESTIMENTOS</a></li>
                <li><a href='https://simuladormatematicafinanceira.onrender.com/#Sobre'>SOBRE</a></li>
            </ul>
        </nav>
    )
}

export default Menu