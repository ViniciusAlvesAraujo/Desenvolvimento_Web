var artista1 = {
    nome: "Dexter",
    anoLancamentoPrimeiroCD: 2005,
    melhoresMusicas: ["Oitavo anjo", "Como vai seu mundo", "Saudades Mil"],
    estilo: "Rap"
}
var artista2 = {
    nome: "Racionais mc's",
    anoLancamentoPrimeiroCD: 1992,
    melhoresMusicas: ["A vida é desafio", "Capítulo 4 versículo 3", "Diário de um detento"],
    informaçoesIntegrantes: [
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
    ],
    estilo: "Rap"
}
var artista3 = {
    nome: "Seu Jorge",
    anoLancamentoPrimeiroCD: 2001,
    melhoresMusicas: ["Amiga da minha mulher", "Burguesinha", "Thats My Way"],
    estilo: "MPB"
}
var database = []

database.push(artista1, artista2, artista3)

console.log(database)

database.sort()

console.log(database)

database.pop()

console.log(database)