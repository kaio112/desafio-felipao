var personagem = "Thanos"
var xp = -5500

if(xp < 1000 && xp >= 0){
    console.log("O Herói de nome " + personagem + " está no nível de FERRO")
}else if(xp > 1000 && xp <= 2000){
    console.log("O Herói de nome " + personagem + " está no nível de BRONZE")
}else if(xp > 2000 && xp <= 5000){
    console.log("O Herói de nome " + personagem + " está no nível de PRATA")
}else if(xp > 5000 && xp <= 6000){
    console.log("O Herói de nome " + personagem + " está no nível de OURO")
}else if(xp > 6000 && xp <= 7000){
    console.log("O Herói de nome " + personagem + " está no nível de PLATINA")
}else if(xp  > 7000 && xp <= 8000){
    console.log("O Herói de nome " + personagem + " está no nível de ASCENDENTE")
}else if(xp > 8000 && xp <= 9000){
    console.log("O Herói de nome " + personagem + " está no nível de IMORTAL")
}else if(xp > 9000 && xp <= 10000){
    console.log("O Herói de nome " + personagem + " está no nível de EXPERIENTE")
}else if(xp > 10000){
    console.log("O Herói de nome " + personagem + " está no nível de RADIANTE")
}else{
    console.log("xp inválido")
}