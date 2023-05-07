const express = require ('express')
const app = express()
const port = 7000

let bandas = [
    {
        nome: "Racionais mcs",
        principaisMusicas: ["Diario de um detento", "Capitulo 4 versiculo 3", "Nego Drama"],
        integrantes: [
            {
                nomeCompleto: "Pedro Paulo Soares Pereira",
                paisDeOrigem: "Brasil",
                idade: 53 
            },
            {
                nomeCompleto: "Edivaldo Pereira Alves",
                paisDeOrigem: "Brasil",
                idade: 52
            },
            {
                nomeCompleto: " Kleber Geraldo Lelis Simões",
                paisDeOrigem: "Brasil",
                idade: 53
            },
            {
                nomeCompleto: " Paulo Eduardo Salvador",
                paisDeOrigem: "Brasil",
                idade: 54
            }
        ]
    },
    {
        nome: "Calypso",
        principaisMusicas: ["A lua me traiu", "Acelerou meu coração", "Passe de magica"] ,
        integrantes:[
            {
                nomeCompleto: "Joelma da Silva Mendes",
                paisDeOrigem: "Brasil",
                idade: 48
            },
            {
                nomeCompleto: "Cledivan Almeida Farias",
                paisDeOrigem: "Brasil",
                idade: 49
            }
        ]
    }
]


app.get("/bandas", function(req, res){
    return res.send(bandas)
})


app.listen(port, function(){
    console.log(`Servidor rodando http://localhost:${port}`)
})