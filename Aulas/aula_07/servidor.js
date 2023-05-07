const express = require ('express')
const app = express()
const port = 8000

let produtos = [
    {
        id: 1,
        nome: "Bolo de milho",
        descricao: "Puro suco do milho verde",
        valor: 25
    },
    {
        id: 2,
        nome: "Bolo de morango",
        descricao: "top demais",
        valor: 30
    }
]

app.get("/produtos", function(req, res){
    return res.send(produtos)
})

app.listen(port, function(){
    console.log(`servidor rodando http://localhost:${port}`)
})