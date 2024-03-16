import React, { useEffect, useState } from 'react'
import Rodape from '../Rodape'
import { db } from '../../firebaseConnection'
import {
    addDoc,
    collection
} from 'firebase/firestore'
import "../../assets/css/cadastro.css"
import primeirasPerguntas from '../../assets/images/primeiras-perguntas.png'
import Menu from '../Menu'


function Cadastro(){

    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userInvestValue, setUserInvestValue] = useState('')
    const [investType, setInvestType] = useState('1');
    const [user, setUser] = useState({})

    const handleOpcaoChange = (event) => {
        setInvestType(event.target.value);
    };

    const VerificarFormulario = (redirecionar, valueInput, button) => {
        if( redirecionar === true){
            if(userName === ''){
                redirecionar = false
            }
        }
        if( redirecionar === true){
            if(userSurname === ''){
                redirecionar = false
            }
        }
        if( redirecionar === true){
            if(parseFloat(userInvestValue) <= 0 || userInvestValue===''){
                redirecionar = false
                valueInput.style.border = '1px solid red'
            } else {
                valueInput.style.border = '2px solid green'
            }
        }
        
        if (redirecionar === true){
            button.style.opacity = '1';
            button.style.transition = 'all 0.3s';
            button.style.cursor = 'pointer'
            return true
        } else {
            desativarBotao()
        }
    }

    useEffect(()=>{
        valueInput = document.getElementById("userInvestValue")
        button = document.getElementById("cadastroButtom")
        let redirecionar = true

        VerificarFormulario(redirecionar, valueInput, button)

        async function loadTarefas(){
            const userDatail = localStorage.getItem('@detailUser')
            setUser(JSON.parse(userDatail))
        }

        loadTarefas()
    }, [userName, userSurname, userInvestValue, investType])

    let valueInput = document.getElementById("userInvestValue")
    let button = document.getElementById("cadastroButtom")

    async function Redirecionar(e) {
        e.preventDefault()

        let redirecionar = true

        VerificarFormulario(redirecionar, valueInput, button)
        if (VerificarFormulario(redirecionar, valueInput, button) === true){
            await addDoc(collection(db, 'userInfo'), {
                //campos a serem cadastrados
                userUid: user?.uid,
                nome: userName.trim(),
                userInvestValue: userInvestValue.trim(),
                investType: investType.trim(),
            })
            .then(()=>{
                setUserName('')
                setUserSurname('')
                setUserInvestValue('')
            })
            .catch((error)=>{
                alert('Erro ao cadastrar!', error)
            })
            window.location.href = `https://mat-fin.netlify.app/investir/${userInvestValue.trim()}/${investType.trim()}`
        }
    }

    const desativarBotao = () => {
        button.style.opacity = '0.6';
        button.style.transition = 'none';
        button.style.cursor = 'no-drop'
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
                            }}
                            />
                        </section>

                        <section>
                            <label>Sobrenome:</label>
                            <input type='text' name='usersurname' id='userSurname' placeholder='Type your surname here' required value={userSurname} 
                            onChange={event=>{
                                setUserSurname(event.target.value)
                            }}
                            />
                        </section>

                        <section>
                            <label>Quanto deseja investir:</label>
                            <input type='number' name='userInvestValue' id='userInvestValue' placeholder='R$ 00.00' required value={userInvestValue} 
                            onChange={event=>{
                                setUserInvestValue(event.target.value)
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

                    <button className='btn' id='cadastroButtom' onClick={Redirecionar}>
                        Avançar
                    </button>

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
