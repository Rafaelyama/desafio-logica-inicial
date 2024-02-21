
// Define o nome do herói
let nomeHeroi = "Rafael";

// Define o xp do herói
let xpHeroi = 999;

// Define o nivel do herói
let nivel = "";

// Verifica o XP do herói e define o nível
if (xpHeroi < 1000){
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel} com ${xpHeroi} XP.`);

