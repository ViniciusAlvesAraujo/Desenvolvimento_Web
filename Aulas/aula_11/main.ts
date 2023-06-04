import Gato from "./gato";
import Pessoa from "./pessoa";

let pessoa = new Pessoa ("Fulano", 15)

console.log (`${pessoa.getNome()} tem ${pessoa.getIdade()} anos`)

let gato = new Gato ()

console.log (gato.emitirSom())

let barulhoGato = gato.emitirSom()

console.log(barulhoGato)