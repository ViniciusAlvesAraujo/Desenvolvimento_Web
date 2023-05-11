const express = require("express")
const app = express()
const port = 7000

let usuarios= [
    {
        nomeUsuario: "Anthony",
        criadoEm: "10/04/2022",
        idade: 15,
        email: "anthony@gmail.com",
        isAdmin: false,
        telefone: ["11955874236", "11985423187"],
        endereco: ["Rua 1, numero 20, bairro Jd. vila Rica, São Paulo"]
    },
    {
        nomeUsuario: "Anna",
        criadoEm: "29/07/2022",
        idade: 18,
        email: "anna@gmail.com",
        isAdmin: true,
        telefone: ["11994675424", "1199464315"],
        endereco: ["Rua 2, numero 10, bairro Jd. vila Sao Carlos, São Paulo"]
    },
    {
        nomeUsuario: "Luisa",
        criadoEm: "11/08/2022",
        idade: 19,
        email: "luisa@gmail.com",
        isAdmin: true,
        telefone: ["11954887145", "119988722368"],
        endereco: ["Rua 3, numero 30, bairro Jd. Caiubi, São Paulo"]
    },
    {
        nomeUsuario: "Andrew",
        criadoEm: "24/08/2022",
        idade: 21,
        email: "andrew@gmail.com",
        isAdmin: false,
        telefone: ["11955572236", "119878923221"],
        endereco: ["Rua 4, numero 25, bairro Jd. Sao Paulo, São Paulo"]
    },
    {
        nomeUsuario: "Alisson",
        criadoEm: "30/12/2022",
        idade: 25,
        email: "alisson@gmail.com",
        isAdmin: true,
        telefone: ["11945454533", "11966649948"],
        endereco: ["Rua 5, numero 32, bairro Jd. Palmas, São Paulo"]
    }
]

let produtos = [
    {
        nomeProduto: "Celular",
        descricao: "O celular perfeito para você",
        valor: 1500,
        criadoEm: "05/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Celular2",
        descricao: "O celular perfeito para você",
        valor: 1600,
        criadoEm: "07/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Celular3",
        descricao: "O celular perfeito para você",
        valor: 1700,
        criadoEm: "10/03/2023",
        emEstoque: false
    },
    {
        nomeProduto: "Celular4",
        descricao: "O celular perfeito para você",
        valor: 1700,
        criadoEm: "20/01/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Celular5",
        descricao: "O celular perfeito para você",
        valor: 2000,
        criadoEm: "09/05/2023",
        emEstoque: true
    }
]

app.get("/usuarios", function (req, res){
    return res.send(usuarios)
})

app.get("/produtos", function (req, res){
    return res.send(produtos)
})

app.listen(port, function(){
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})