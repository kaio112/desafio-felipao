
class Heroi {
    nome;
    idade;
    tipo;
    ataque;
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "mago") {
            this.ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada"
        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken"
        }
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)

    }
}


var heroi = new Heroi("virus", 20, "monge")
heroi.atacar()

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
///se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)
