import React from 'react'
import '../../assets/css/menu.css'
import Logo from "../../assets/images/logo.png"
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

function Menu(){
    return(
        <nav id='menu'>
            <div className='mobile-menu' id='mobile-menu' onClick={
                ()=>{
                    document.getElementById("menu-back").classList.toggle("activated")
                    document.getElementById("menu-items").classList.toggle("activated")
                }
            }>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            
            <div className='menu-back' id='menu-back'></div>

            <ul className='menu' id='menu-items'>
                <li className='logo'><a href='http://localhost:3000/' id='logo'><img src={Logo} alt="logo">
                    </img><span><h3>PROSPER</h3><h3>INVEST</h3></span></a>
                </li>
                
                <li><a href='#Home'>HOME</a></li>
                <li><a href='#Simulador'>SIMULADOR</a></li>
                <li><a href='#Investimentos'>INVESTIMENTOS</a></li>
                <li><a href='#Sobre'>SOBRE</a></li>
            </ul>
        </nav>
    )
}

export default Menu