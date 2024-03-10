import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../assets/css/calcular.css'
import './valores.js'
const investimentos = JSON.parse(localStorage.getItem("Investimentos"))
const variaveis = JSON.parse(localStorage.getItem("Variaveis"))

function Calcular(){

    let {userName, userSurname} = useParams()
    
    const resultados = {
        cdb1: 0,
        cdb2: 0,
        cdb3: 0,
        acao1: 0,
        acao2: 0,
        acao3: 0
    }
    
    function calcularImpostoRenda(rendimentoLiquido, tempoAplicacao) {
        let taxaIR;
            if (tempoAplicacao <= 0.5) {
                taxaIR = 0.225;
            } else if (tempoAplicacao <= 1) {
                taxaIR = 0.2;
            } else if (tempoAplicacao <= 2) {
                taxaIR = 0.175;
            } else {
                taxaIR = 0.15;
            }
            return rendimentoLiquido * taxaIR
        }

    const CdbNubank = ()=>{

        const valorDoCdi = parseFloat(variaveis.valorCdi)
        const tempoAplicacao = parseFloat(variaveis.tempoAplicacao);
        const valorInvestido = parseFloat(investimentos.cdb1.split(';')[0])
        const aportesMensais = parseFloat(investimentos.cdb1.split(';')[1])
        const taxaCustodia = parseFloat(variaveis.taxaCustodia)*2
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativa) * tempoAplicacao
        const taxaCDB = 1.07*valorDoCdi;
        let ir = 0 
        let TaxaCustodiaValor = 0
        let rendimentoTotal = 0 
        let valorInvestidoComOTempo = 0 
        let totalTaxaAdministrativa = 0


        let totalBruto = (valorInvestido+aportesMensais*tempoAplicacao*11)*(1+taxaCDB)**tempoAplicacao

        for(let i =1;i<=tempoAplicacao;i++){
            valorInvestidoComOTempo = (valorInvestido+aportesMensais*i*11)// ja ta acumulando
            totalTaxaAdministrativa += valorInvestidoComOTempo*taxaAdministrativa
            TaxaCustodiaValor += valorInvestidoComOTempo * taxaCustodia*2
        }

        rendimentoTotal = totalBruto - valorInvestidoComOTempo
        
        switch(tempoAplicacao){ 
            case 1:
                ir = calcularImpostoRenda(rendimentoTotal, 0.5)
                break 
            case 2:
                ir = calcularImpostoRenda(rendimentoTotal, 1)
                break
            case 3:
                ir = calcularImpostoRenda(rendimentoTotal, 2)
                break 
            case 4:
                ir = calcularImpostoRenda(rendimentoTotal, 2)
                break 
            default:
                ir = calcularImpostoRenda(rendimentoTotal, 5)
                break
        }
    
            const impostos = (ir + totalTaxaAdministrativa  + TaxaCustodiaValor)
            const rendimentoLiquido = rendimentoTotal - impostos
            const valorLiquido = valorInvestidoComOTempo + rendimentoLiquido
    
            const CDB1 = {
                rendimentoTotal,
                impostos,
                ir,
                valorInvestidoComOTempo,
                taxaCustodia: TaxaCustodiaValor,
                taxaAdministrativa: totalTaxaAdministrativa,
                rendimentoLiquido,
                valorLiquido,
                valorBruto: valorInvestidoComOTempo + rendimentoTotal
            }
    
            console.log(CDB1)
            return CDB1
    }

    const TesouroPrefixado = () =>{

        const tempoAplicacao = parseFloat(variaveis.tempoAplicacao);
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativa)
        const valorInvestido = parseFloat(investimentos.cdb2.split(';')[0])
        const aportesMensais = parseFloat(investimentos.cdb2.split(';')[1])
        const taxaCustodia = parseFloat(variaveis.taxaCustodia)
        const tempoSemestral = parseFloat(tempoAplicacao)*2;
        const taxaCDB = 0.1064/2;
        let ir = 0 
        let TaxaCustodiaValor = 0
        let rendimentoTotal = 0 
        let valorInvestidoComOTempo = 0 
        let totalDoPeriodo = 0 
        let rendimentoDoPeriodo = 0 
        let totalTaxaAdministrativa = 0
        
    
        for(let i=1; i<=tempoSemestral; i++){

            totalDoPeriodo = (valorInvestido + aportesMensais * ((6 * i)-1))*(1+taxaCDB)
            valorInvestidoComOTempo = (valorInvestido + aportesMensais * ((6 * i)-1))
            TaxaCustodiaValor += (valorInvestidoComOTempo * taxaCustodia)
            rendimentoDoPeriodo = (totalDoPeriodo - valorInvestidoComOTempo)
            rendimentoTotal += rendimentoDoPeriodo
            
            switch(i){ 
                case 1:
                    ir += calcularImpostoRenda(rendimentoDoPeriodo, 0.5)
                    break 
                case 2:
                    ir += calcularImpostoRenda(rendimentoDoPeriodo, 1)
                    break
                case 3:
                    ir += calcularImpostoRenda(rendimentoDoPeriodo, 2)
                    break 
                case 4:
                    ir += calcularImpostoRenda(rendimentoDoPeriodo, 2)
                    break 
                default:
                    ir += calcularImpostoRenda(rendimentoDoPeriodo, 5)
                    break
            }

            //totalTaxaAdministrativa
            if(i%2 ===0){
                totalTaxaAdministrativa += valorInvestidoComOTempo*taxaAdministrativa
            }
            
        }
    
        const impostos = (ir + totalTaxaAdministrativa  + TaxaCustodiaValor)
        const rendimentoLiquido = rendimentoTotal - impostos
        const valorLiquido = valorInvestidoComOTempo + rendimentoLiquido

        const CDB2 = {
            rendimentoTotal,
            impostos,
            ir,
            valorInvestidoComOTempo,
            taxaCustodia: TaxaCustodiaValor,
            taxaAdministrativa: totalTaxaAdministrativa,
            rendimentoLiquido,
            valorLiquido,
            valorBruto: valorInvestidoComOTempo + rendimentoTotal
        }
        return CDB2
    }

    const TesouroSelic = () =>{
        const tempoAplicacao = parseFloat(variaveis.tempoAplicacao)*12;
        const taxaSelic = parseFloat(variaveis.valorSelic)
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativa)
        const valorInvestido = parseFloat(investimentos.cdb3.split(';')[0])
        const aportesMensais = parseFloat(investimentos.cdb3.split(';')[1])
        const taxaCustodia = parseFloat(variaveis.taxaCustodia)
        const taxaCDB = taxaSelic/12 + (0.15/12)/100 //0.0095

        let ir = 0 
        let TaxaCustodiaValor = 0
        let rendimentoTotal = 0 
        let valorInvestidoComOTempo = 0 
        let totalDoPeriodo = 0 
        let rendimentoDoPeriodo = 0 
        let totalTaxaAdministrativa = 0

        for(let i =1; i<=tempoAplicacao; i++){
            valorInvestidoComOTempo = (valorInvestido + aportesMensais * (i-1))
            totalDoPeriodo = (valorInvestido + aportesMensais * (i-1)) * (1 + taxaCDB)
            rendimentoDoPeriodo =  totalDoPeriodo - valorInvestidoComOTempo
            rendimentoTotal += rendimentoDoPeriodo
            
            if(i<=6){ 
                ir += calcularImpostoRenda(rendimentoDoPeriodo, 0.5)
            }
            else if( i<=12){
                ir += calcularImpostoRenda(rendimentoDoPeriodo, 1)
            }
            else if (i<=24){
                ir += calcularImpostoRenda(rendimentoDoPeriodo, 2)
            } 
            else {
                ir += calcularImpostoRenda(rendimentoDoPeriodo, 5)
            }
            
            
            
            if(i%12===0){
                
                totalTaxaAdministrativa += taxaAdministrativa * valorInvestidoComOTempo

                console.log(totalTaxaAdministrativa)
                if(valorInvestidoComOTempo >= 10000){
                    TaxaCustodiaValor += taxaCustodia * valorInvestidoComOTempo
                } else {
                    TaxaCustodiaValor = 0
                }
            }

        }
        
        const impostos = (ir + totalTaxaAdministrativa  + TaxaCustodiaValor)
        const rendimentoLiquido = rendimentoTotal - impostos
        const valorLiquido = valorInvestidoComOTempo + rendimentoLiquido

        const CDB3 = {
            rendimentoTotal,
            impostos,
            ir,
            valorInvestidoComOTempo,
            taxaCustodia: TaxaCustodiaValor,
            taxaAdministrativa: totalTaxaAdministrativa,
            rendimentoLiquido,
            valorLiquido,
            valorBruto: valorInvestidoComOTempo + rendimentoTotal
        }

        console.log(CDB3)
        return CDB3
    }
    
    
    useEffect(()=>{
        resultados.cdb1 = CdbNubank()
        resultados.cdb2 = TesouroPrefixado()
        resultados.cdb3 = TesouroSelic()
        localStorage.setItem("Resultados", JSON.stringify(resultados))
        window.location.href = `https://simuladormatematicafinanceira.onrender.com/Resultados/${userName}/${userSurname}`
    })

    return(
        <main id='Calcular'><div className="loader"></div></main>
    )
}

export default Calcular