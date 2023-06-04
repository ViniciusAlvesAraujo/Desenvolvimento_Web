"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gato_1 = __importDefault(require("./gato"));
const pessoa_1 = __importDefault(require("./pessoa"));
let pessoa = new pessoa_1.default("Fulano", 15);
console.log(`${pessoa.getNome()} tem ${pessoa.getIdade()} anos`);
let gato = new gato_1.default();
console.log(gato.emitirSom());
let barulhoGato = gato.emitirSom();
console.log(barulhoGato);
