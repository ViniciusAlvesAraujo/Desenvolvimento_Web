var contaCorrente = {
    saldo: 1500,
    faturaAtual: 500,
    creditoDisponivel: 300,
    extrato: {
        entradas: [
            {
                data: "06/04/2023",
                valor: 500
            },
            {
                data: "20/04/2023",
                valor: 1000
            }
        ],
        saidas: [
            {
                data: "10/04/2023",
                valor: 200,
                descrição: "Posto de gasolina"
            },
            {
                data: "15/04/2023",
                valor: 200,
                descrição: "Restaurante"
            },
            {
                data: "22/04/2023",
                valor: 100,
                descrição: "Loja de Roupas"
            }
        ]
    },
    exibirExtrato: true
}

if (contaCorrente.saldo >= contaCorrente.faturaAtual){
    console.log("Você possui saldo para pagar a fatura atual.")
}else { 
    console.log("Você não possui saldo suficiente para pagar a fatura, experimente pegar credito para conseguir pagar. " + contaCorrente.creditoDisponivel)
}
if (contaCorrente.exibirExtrato){
    console.log(contaCorrente.extrato)
} 
