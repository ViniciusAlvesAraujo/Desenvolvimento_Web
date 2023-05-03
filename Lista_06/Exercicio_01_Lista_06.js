let listaPessoas = [
    pessoa1 = {
        nome: "Fulano",
        sobrenome: "Santos",
        idade: 18
    },
    pessoa2 = {
        nome: "Ciclano",
        sobrenome: "Ribeiro",
        idade: 17
    },
    pessoa3 = {
        nome: "Beltrano",
        sobrenome: "Silva",
        idade: 16
    },
    pessoa4 = {
        nome: "Herculano",
        sobrenome: "Menezes",
        idade: 20
    },
    pessoa5 = {
        nome: "Minuano",
        sobrenome: "Souza",
        idade: 13
    }
]

function maiorIdade (pessoas){
    for (let i of listaPessoas){
        if(i.idade >= 18){
            console.log(`Seja bem vindo(a)! Você se chama ${i.nome} ${i.sobrenome} e tem ${i.idade} anos
                        e é maior de idade`)
        }
         else if (i.idade > 0 && i.idade < 18){
            console.log (`Seja bem vindo(a)! Você se chama ${i.nome} ${i.sobrenome} e tem ${i.idade} anos
                        e não é maior de idade`)
        }
        else{
            console.log(`Idade inválida. Digite uma idade correta.`)
        }
    }
}
function verificaNome (pessoas){
    for (let i of listaPessoas){
        let tamanhoNomeCompleto = i.nome.length + i.sobrenome.length

        if (tamanhoNomeCompleto < 3){
            console.log(`Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres.`)
        }
        else if (tamanhoNomeCompleto > 3 && tamanhoNomeCompleto > 50){
            console.log(`Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres.`)
        }

    }
}
function quantidadePessoas (pessoas){
    let quantidadeTotalDePessoas = listaPessoas.length

    console.log (`A quantidade de pessoas é ${quantidadeTotalDePessoas}`)
}

maiorIdade(listaPessoas)
verificaNome(listaPessoas)
quantidadePessoas(listaPessoas)