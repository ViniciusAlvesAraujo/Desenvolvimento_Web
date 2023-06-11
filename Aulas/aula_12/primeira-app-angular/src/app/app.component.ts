import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mensagem: string = "Olá";
  public nome: string = "Fulano";
  public idade: number = 22;
  public profissao: string = "DEV Javascript"

  public listaProdutos = [{ nome: "Bolo de chocolate", preco: 10, descricao: "Muito Bom"},
                          { nome: "Bolo de milho", preco: 10, descricao: "Muito Bom"},
                          { nome: "Bolo de morango", preco: 10, descricao: "Muito Bom"},
                          { nome: "Bolo de laranja", preco: 10, descricao: "Muito Bom"},
                         ]

}
