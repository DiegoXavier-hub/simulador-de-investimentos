import { useState } from 'react'
import Menu from "../Menu"
import Rodape from '../Rodape'
import "../../assets/css/cadastro.css"
import primeirasPerguntas from '../../assets/images/primeiras-perguntas.png'
import { criptografar } from '../../functions/criptografia.js'


function Cadastro(){

    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userInvestValue, setUserInvestValue] = useState('')
    const [investType, setInvestType] = useState('1');

    const handleOpcaoChange = (event) => {
        setInvestType(event.target.value);
        Codificar()
    };

    const [userNameCrip, setUserNameCrip] = useState(userName)
    const [userSurnameCrip, setUserSurnameCrip] = useState(userSurname)
    const [userInvestValueCrip, setuserInvestValueCrip] = useState(userInvestValue)

    const Codificar = () =>{
        setUserNameCrip(criptografar(userName, 22))
        setUserSurnameCrip(criptografar(userSurname, 3))
        setuserInvestValueCrip(Math.sqrt(userInvestValue))
    }

    return(
        <main id='Cadastro'>
            <Menu/>
            <div className='content'>
                <div className='inputs'>
                    <h1>VAMOS COMEÇAR...</h1>
                    
                    <div id='DataInvestGroup'>
                        <section>
                            <label>Nome:</label>
                            <input type='text' name='username' id='userName' placeholder='Type your name here' required value={userName} 
                            onChange={event=>{
                                setUserName(event.target.value)
                                Codificar()
                            }}
                            />
                        </section>

                        <section>
                            <label>Sobrenome:</label>
                            <input type='text' name='usersurname' id='userSurname' placeholder='Type your surname here' required value={userSurname} 
                            onChange={event=>{
                                setUserSurname(event.target.value)
                                Codificar()
                            }}
                            />
                        </section>

                        <section>
                            <label>Quanto deseja investir:</label>
                            <input type='number' name='userInvestValue' id='userInvestValue' placeholder='R$ 00.00' required value={userInvestValue} 
                            onChange={event=>{
                                setUserInvestValue(event.target.value)
                                Codificar()
                            }}
                            />
                        </section>
                    </div>

                    <div id='PerfilInvestGroup'> 
                        <section >
                            <h4>Qual seu perfil de investidor?</h4>
                        </section>

                        <section className='perfil' >
                            
                            <label>
                                <input
                                type='radio'
                                value='1'
                                checked={investType === '1'}
                                onChange={handleOpcaoChange}
                                />
                                Conservador
                            </label>
                            <label>
                                <input
                                type='radio'
                                value='2'
                                checked={investType === '2'}
                                onChange={handleOpcaoChange}
                                />
                                Moderado
                            </label>
                            <label>
                                <input
                                type='radio'
                                value='3'
                                checked={investType === '3'}
                                onChange={handleOpcaoChange}
                                />
                                Arrojado
                            </label>
                        </section>
                    </div>

                    <a href={`https://simuladormatematicafinanceira.onrender.com/Investir/${userNameCrip}-${userSurnameCrip}-${userInvestValueCrip}-${investType}`} className='btn'>
                        Avançar
                    </a>

                </div>
                
                <div className='design'>
                    <img src={primeirasPerguntas} alt='design'/>
                </div>
            </div>
            <Rodape/>
        </main>
    )
}

export default Cadastro