import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../assets/css/calcular.css'
import './valores.js'

function Calcular(){
    const investimentos = JSON.parse(localStorage.getItem("Investimentos"))
    const variaveis = JSON.parse(localStorage.getItem("Variaveis"))
    
    const resultados = {
        cdb1: 0,
        cdb2: 0,
        cdb3: 0,
        acao1: 0,
        acao2: 0,
        acao3: 0
    }

    const [vale3, setVale3] = useState(0)
    const [itub4, setItub4] = useState(0)
    const [bbas3, setBbas3] = useState(0)

    const calcular_tempo_restante = (anos, dataPassada) => {
        const [dia, mes, ano] = dataPassada.split('-')
        const dataPassadaObj = new Date(ano, mes -1, dia)
        const hoje = new Date()
        let data_limite = new Date()
        data_limite.setFullYear(data_limite.getFullYear() + anos)
        
        if(data_limite < dataPassadaObj){
            return parseFloat(anos)
        } else {
            const diferencaMS = dataPassadaObj.getTime() - hoje.getTime()
            const diferencaAnos = diferencaMS / (1000 * 60 * 60 * 24 * 365.25)
            return parseFloat(diferencaAnos.toFixed(2))
        }

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

    function calcularTaxaEquivalente(taxa, tempo){
        const taxaFloat = parseFloat(taxa)
        const tempoFloat = parseFloat(tempo)
        const taxaEquivalente = (1+taxaFloat)**(1/tempoFloat) -1
        return parseFloat(taxaEquivalente.toFixed(4)) 
    }

    const CdbNubank = ()=>{

        const valorDoCdi = parseFloat(variaveis.valorCdi)
        const tempoAplicacao = calcular_tempo_restante(parseFloat(variaveis.tempoAplicacao), '21-01-2026');
        let aportesMensais = 0
        let valorInvestido = 0
        if(investimentos.cdb1 !== 0){
            aportesMensais = parseFloat((investimentos.cdb1).split(';')[1])
            valorInvestido = parseFloat((investimentos.cdb1).split(';')[0])
        }
        const taxaCustodia = parseFloat(variaveis.taxaCustodia)*2
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativa) * tempoAplicacao
        const taxaCDB = calcularTaxaEquivalente(1.07*valorDoCdi, 12)
        
        

        let ir = 0 
        let TaxaCustodiaValor = 0
        let rendimentoTotal = 0 
        let valorInvestidoComOTempo = 0 
        let totalTaxaAdministrativa = 0


        let totalBruto = (valorInvestido+aportesMensais*tempoAplicacao*11)*((1+taxaCDB)**tempoAplicacao)

        for(let i =1;i<=tempoAplicacao;i++){
            valorInvestidoComOTempo = (valorInvestido+aportesMensais*i*11)
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
                id: 'CdbNubank',
                tempo: tempoAplicacao,
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
    
            
            return CDB1
    }

    const TesouroPrefixado = () =>{

        const tempoAplicacao = calcular_tempo_restante(parseFloat(variaveis.tempoAplicacao), '01-01-2033');
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativa)
        let aportesMensais = 0
        let valorInvestido = 0
        if(investimentos.cdb2 !== 0){
            aportesMensais = parseFloat((investimentos.cdb2).split(';')[1])
            valorInvestido = parseFloat((investimentos.cdb2).split(';')[0])
        }
        const taxaCustodia = parseFloat(variaveis.taxaCustodia)
        const tempoSemestral = parseFloat(tempoAplicacao)*2;
        // const taxaCDB = 0.1064/2;
        const taxaCDB = calcularTaxaEquivalente(0.1064, 2)
        
        

        let ir = 0 
        let TaxaCustodiaValor = 0
        let rendimentoTotal = 0 
        let valorInvestidoComOTempo = 0 
        let totalDoPeriodo = 0 
        let rendimentoDoPeriodo = 0 
        let totalTaxaAdministrativa = 0
        
    
        for(let i=1; i<=tempoSemestral; i++){

            totalDoPeriodo = (valorInvestido + aportesMensais * (i-1))*(1+taxaCDB)
            valorInvestidoComOTempo = (valorInvestido + aportesMensais * (i-1))
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

            if(i%2 ===0){
                totalTaxaAdministrativa += valorInvestidoComOTempo*taxaAdministrativa
            }
            
        }
    
        const impostos = (ir + totalTaxaAdministrativa  + TaxaCustodiaValor)
        const rendimentoLiquido = rendimentoTotal - impostos
        const valorLiquido = valorInvestidoComOTempo + rendimentoLiquido

        const CDB2 = {
            id: 'TesouroPrefixado',
            tempo: tempoAplicacao,
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
        let tempoAplicacao = calcular_tempo_restante(parseFloat(variaveis.tempoAplicacao), '01-03-2029');
        tempoAplicacao = tempoAplicacao*12
        const taxaSelic = parseFloat(variaveis.valorSelic)
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativa)
        let aportesMensais = 0
        let valorInvestido = 0
        if(investimentos.cdb3 !== 0){
            aportesMensais = parseFloat((investimentos.cdb3).split(';')[1])
            valorInvestido = parseFloat((investimentos.cdb3).split(';')[0])
        }
        const taxaCustodia = parseFloat(variaveis.taxaCustodia)
        // const taxaCDB = taxaSelic/12 + (0.15/12)/100 //0.0095
        const taxaCDB = calcularTaxaEquivalente(taxaSelic + 0.1588/100, 12)


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
            id: 'TesouroSelic',
            tempo: tempoAplicacao,
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

        return CDB3
    }

    const calcularDividendoAcao = (valor, numAcoes) => {
        return valor * numAcoes
    }

    const ITUB4 = () => {
        let tempoAplicacao = parseFloat(variaveis.tempoAplicacao);
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativaAcoes)
        const numAcoes = parseInt(investimentos.acao1)
        const valorPagamentoDivididendos = parseFloat(variaveis.precoDividendosItub)

        let valorInvestidoComOTempo = numAcoes * itub4
        let itubValue = itub4 * 1.4119
        const dividendos = calcularDividendoAcao(valorPagamentoDivididendos, numAcoes)*4*tempoAplicacao
        let redimentoPorAcaoBruto = itubValue - itub4 + dividendos/numAcoes
        const valorBruto = numAcoes * itubValue + dividendos
        let redimentoTotalBruto = valorBruto - valorInvestidoComOTempo

        let ir = 0
        let totalTaxaAdministrativa = 0

        if(redimentoTotalBruto >= 20000){
            ir = redimentoTotalBruto * 0.15
        }

        for(let i=0; i<=tempoAplicacao; i++){
            totalTaxaAdministrativa += (valorInvestidoComOTempo * taxaAdministrativa)
        }

        const impostos = ir + totalTaxaAdministrativa
        const rendimentoLiquido = redimentoTotalBruto - impostos
        const valorLiquido = rendimentoLiquido + valorInvestidoComOTempo
        const rendimentoPorAcaoLiquido = redimentoPorAcaoBruto - (impostos/numAcoes)
        
        
        const ITUB4 = {
            id: 'ITUB4',
            tempo: tempoAplicacao,
            redimentoPorAcaoBruto,
            rendimentoPorAcaoLiquido,
            redimentoTotalBruto,
            impostos,
            ir,
            valorInvestidoComOTempo,
            taxaAdministrativa: totalTaxaAdministrativa,
            rendimentoLiquido,
            valorLiquido,
            valorBruto
        }

        return(ITUB4)
    }

    const VALE3 = () => {
        let tempoAplicacao = parseFloat(variaveis.tempoAplicacao);
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativaAcoes)
        const numAcoes = parseInt(investimentos.acao2)
        const valorPagamentoDivididendos = parseFloat(variaveis.precoDividendosVale)

        let valorInvestidoComOTempo = numAcoes * vale3
        let valeValue = vale3 * 1.8902
        const dividendos = calcularDividendoAcao(valorPagamentoDivididendos, numAcoes)*4*tempoAplicacao
        let redimentoPorAcaoBruto = valeValue - vale3 + dividendos/numAcoes
        const valorBruto = numAcoes * valeValue + dividendos
        let redimentoTotalBruto = valorBruto - valorInvestidoComOTempo

        let ir = 0
        let totalTaxaAdministrativa = 0

        if(redimentoTotalBruto >= 20000){
            ir = redimentoTotalBruto * 0.15
        }

        for(let i=0; i<=tempoAplicacao; i++){
            totalTaxaAdministrativa += (valorInvestidoComOTempo * taxaAdministrativa)
        }

        const impostos = ir + totalTaxaAdministrativa
        const rendimentoLiquido = redimentoTotalBruto - impostos
        const valorLiquido = rendimentoLiquido + valorInvestidoComOTempo
        const rendimentoPorAcaoLiquido = redimentoPorAcaoBruto - (impostos/numAcoes)
        
        
        const VALE3 = {
            id: 'VALE3',
            tempo: tempoAplicacao,
            redimentoPorAcaoBruto,
            rendimentoPorAcaoLiquido,
            redimentoTotalBruto,
            impostos,
            ir,
            valorInvestidoComOTempo,
            taxaAdministrativa: totalTaxaAdministrativa,
            rendimentoLiquido,
            valorLiquido,
            valorBruto
        }

        return(VALE3)
    }

    


    const BBAS3 = () => {
        let tempoAplicacao = parseFloat(variaveis.tempoAplicacao);
        const taxaAdministrativa = parseFloat(variaveis.taxaAdministrativaAcoes)
        const numAcoes = parseInt(investimentos.acao3)
        const valorPagamentoDivididendos = parseFloat(variaveis.precoDividendosVale)

        let valorInvestidoComOTempo = numAcoes * bbas3
        let bbasValue = bbas3 * 1.5462
        const dividendos = calcularDividendoAcao(valorPagamentoDivididendos, numAcoes)*4*tempoAplicacao
        let redimentoPorAcaoBruto = bbasValue - bbas3 + dividendos/numAcoes
        const valorBruto = numAcoes * bbasValue + dividendos
        let redimentoTotalBruto = valorBruto - valorInvestidoComOTempo

        let ir = 0
        let totalTaxaAdministrativa = 0

        if(redimentoTotalBruto >= 20000){
            ir = redimentoTotalBruto * 0.15
        }

        for(let i=0; i<=tempoAplicacao; i++){
            totalTaxaAdministrativa += (valorInvestidoComOTempo * taxaAdministrativa)
        }

        const impostos = ir + totalTaxaAdministrativa
        const rendimentoLiquido = redimentoTotalBruto - impostos
        const valorLiquido = rendimentoLiquido + valorInvestidoComOTempo
        const rendimentoPorAcaoLiquido = redimentoPorAcaoBruto - (impostos/numAcoes)
        
        
        const BBAS3 = {
            id: 'BBAS3',
            tempo: tempoAplicacao,
            redimentoPorAcaoBruto,
            rendimentoPorAcaoLiquido,
            redimentoTotalBruto,
            impostos,
            ir,
            valorInvestidoComOTempo,
            taxaAdministrativa: totalTaxaAdministrativa,
            rendimentoLiquido,
            valorLiquido,
            valorBruto
        }

        return(BBAS3)
    }

    function generateRandomNumber() {
        return Math.floor(Math.random() * (2350 - 1320 + 1)) + 1320;
    }
    
    
    useEffect(()=>{

        async function fetchData(){
            const symbols = ['VALE3', 'ITUB4', 'BBAS3']
            for (let symbol of symbols){
                try{
                    const response = await axios.get(`https://brapi.dev/api/quote/${symbol}?token=azdVoKdmnG7896qe5DSC1r`)
                    const stockData = response.data.results[0]
                    switch(symbol){
                        case 'VALE3':
                            setVale3(stockData.regularMarketPrice) 
                            break
                        case 'ITUB4':
                            setItub4(stockData.regularMarketPrice)
                            break
                        case 'BBAS3':
                            setBbas3(stockData.regularMarketPrice)
                            break
                        default:
                            break
                    }
                } catch (error) {
                    alert("fetching error: ", error)
                }
            }
        }

        fetchData()

        resultados.cdb1 = CdbNubank()
        resultados.cdb2 = TesouroPrefixado()
        resultados.cdb3 = TesouroSelic()
        resultados.acao1 = VALE3()
        resultados.acao2 = ITUB4()
        resultados.acao3 = BBAS3()
        localStorage.setItem("Resultados", JSON.stringify(resultados))
        
        setTimeout(() => {
            window.location.href = `https://mat-fin.netlify.app/results`;
        }, generateRandomNumber());
    }, [vale3, itub4, bbas3])

    return(
        <main id='Calcular'><div className="loader"></div></main>
    )
}

export default Calcular