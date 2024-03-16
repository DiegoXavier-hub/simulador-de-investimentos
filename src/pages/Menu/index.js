import React from 'react'
import '../../assets/css/menu.css'
import Logo from "../../assets/images/logo.png"
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConnection'
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

function Menu(){

    //desloga o usuário
    async function handleLogout() {
        await signOut(auth);
    }
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
                <li className='logo'><a href='https://mat-fin.netlify.app/' id='logo'><img src={Logo} alt="logo">
                    </img><span><h3>PROSPER</h3><h3>INVEST</h3></span></a>
                </li>
                
                <li><a href='https://mat-fin.netlify.app/#Home'>HOME</a></li>
                <li><a href='https://mat-fin.netlify.app/#Simulador'>SIMULADOR</a></li>
                <li><a href='https://mat-fin.netlify.app/#Investimentos'>INVESTIMENTOS</a></li>
                <li><a href='https://mat-fin.netlify.app/#Sobre'>SOBRE</a></li>
                <li><a href='/' onClick={handleLogout}>SAIR</a></li>
            </ul>
        </nav>
    )
}

export default Menu