var i = [7, 9, 12, 21]

for (let x = 1; x <= 30; x++){
    var verdade = i.includes(x)
    console.log("o numero " + x + " está dentro do array: " + verdade)
}
var nomes = ["bruno", "jandira", "lurdinha"]

var lista = nomes.includes("jair")
if(nomes.includes("jair")){
    console.log("o nome está no array")
}
