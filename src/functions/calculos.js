import './valores.js'
import React, {useState, useEffect} from 'react'
const investimentos = JSON.parse(localStorage.getItem("Investimentos"))
const variaveis = JSON.parse(localStorage.getItem("Variaveis"))

const tempoAplicacao = parseFloat(variaveis.tempoAplicacao);
const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativa)
const valorInvestido = parseFloat(investimentos.cdb2.split(';')[0])
const aportesMensais = parseFloat(investimentos.cdb2.split(';')[1])
const taxaCustodia = parseFloat(variaveis.taxaCustodia)

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

const TesouroPrefixado = () =>{
    const tempoSemestral = parseFloat(variaveis.tempoAplicacao)*2;
    const taxaCDB = 0.1064/2;
    let semestre = 6
    let bruto = 0
    let ir = 0
    let TaxaCustodiaValor = 0

    for(let i=1; i<=tempoSemestral; i++){
        let totalDoPeriodo = (valorInvestido + aportesMensais * semestre * i)*(1+taxaCDB)
        let valorInvestidoComOTempo = (valorInvestido + aportesMensais * semestre * i)
        bruto += totalDoPeriodo
        TaxaCustodiaValor += (valorInvestidoComOTempo * taxaCustodia)
        let rendimentoDoPeriodo = (totalDoPeriodo - valorInvestidoComOTempo)

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
    }

    const investido = valorInvestido + aportesMensais * semestre * tempoSemestral
    const rendimentoBruto = bruto - investido
    const impostos = (ir + rendimentoBruto * taxaAdministrativa  + TaxaCustodiaValor)
    const rendimentoLiquido = rendimentoBruto - impostos
    const valorLiquido = investido + rendimentoLiquido

    const CDB2 = {
        rendimentoBruto,
        impostos,
        ir,
        investido,
        taxaCustodia: TaxaCustodiaValor,
        taxaAdministrativa: rendimentoBruto * taxaAdministrativa,
        rendimentoLiquido,
        valorLiquido,
        valorBruto: bruto
    }
    
    return CDB2
}

console.log(TesouroPrefixado())


// const cdbNubank = ()=>{
    
//     const valorDoCdi = parseFloat(variaveis.valorCdi)

//     let valorInvestido = investimentos.cdb1.split(';')
//     let aportes = parseFloat(valorInvestido[1])
//     valorInvestido = parseFloat(valorInvestido[0])
    
//     const juros = (valorInvestido*(1.07*valorDoCdi))**2

//     const imposto = juros*ir

//     const montante = juros + valorInvestido - imposto
//     return juros
// }
// console.log("cdb nubank " + cdbNubank())


const resultados = {
    cdb1: 0,
    cdb2: 0,
    cdb3: 0,
    acao1: 0,
    acao2: 0,
    acao3: 0
}

const GuardarValores = () => {
    localStorage.setItem("Resultados", JSON.stringify(resultados))
}

GuardarValores()