let listaPessoas = [

    pessoa1 = {
        nome: "Jaqueline",
        idade: 25,
        ehAdmin: true,
        email: "jaque@teste.com"
    },
    pessoa2 = {
        nome: "Anthony",
        idade:"18",
        ehAdmin: true,
        email: "anthony@teste.com"
    },
    pessoa3 = {
        nome: "Ana",
        idade:"25",
        ehAdmin: false,
        email: "ana@teste.com"
    },
    pessoa4 = {
        nome: "Alisson",
        idade:"28",
        ehAdmin: true,
        email: "alisson@teste.com"
    },
    pessoa5 = {
        nome: "Rafael",
        idade:"22",
        ehAdmin: false,
        email: "rafa@teste.com"
    },   
]

for (let i = 0; i < listaPessoas.length; i++){
    if (listaPessoas[i].ehAdmin){
        console.log(`Olá ${listaPessoas[i].nome}! Bem vindo(a), você é admin do sistema,
        enviamos um email para ${listaPessoas[i].email} para você criar uma senha.`)
    }else{
        console.log(`Olá ${listaPessoas[i].nome}! Bem vindo(a), você não é admin do sistema,
        enviamos um email para ${listaPessoas[i].email} para você criar uma senha.`)
    }
}