const {somaPontos, verificaPatente} = require("./funcoes")
var resultado = somaPontos(40, 5) //recebe vitorias e derrotas 
let patente = verificaPatente(resultado) //retorna patente


console.log("O Herói tem saldo de " + resultado + " pontos está no nível de " + patente)