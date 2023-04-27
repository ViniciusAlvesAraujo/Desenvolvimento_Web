var nome = prompt("Digite seu nome:")
var idade = prompt("Digite sua idade")

var tagTitulo = document.getElementById("titulo")


if (idade >= 18){
    tagTitulo.innerHTML = "Olá " + nome + ". Você é maior de idade."
}else{
    tagTitulo = "Olá " + nome + ". Você é menor de idade."
}