let nome = "Marcus";

let XP = 10240;
let nomeNivel = "";

if(XP <= 1000){
    nomeNivel = "Ferro"
}else if(XP >= 1001 && XP <= 2000){
    nomeNivel = "Bronze"
}else if(XP >= 2001 && XP <= 5000){
    nomeNivel = "Prata"
}else if(XP >= 5001 && XP <= 7000){
    nomeNivel = "Ouro"
}else if(XP >= 7001 && XP <= 8000){
    nomeNivel = "Platina"
}else if(XP >= 8001 && XP <= 9000){
    nomeNivel = "Ascendente"
}else if(XP >= 9001 && XP <= 10000){
    nomeNivel = "Imortal"
}else if(XP >= 10001 ){
    nomeNivel = "Radiante"
}else {nomeNivel = "não classificação"}


switch (nomeNivel){
    case "Ferro":
        console.log("O Heroi de nome " + nome + " está nivel de " + nomeNivel);
        break;
    case "Bronze":
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel);
        break;

    case "Prata":
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel);
        break;
    case "Ouro":
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel);
        break;
    case "Platina":
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel);
        break;
    case "Ascendente":
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel);
        break;
    case "Imortal":
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel);
        break;
    case "Radiante":
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel);
        break;
    default:
        console.log("O Heroi de nome " + nome + " está no nivel de " + nomeNivel)
}