// criar uma funçao para classificar o herói
function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

// Lista de heróis e seus xps iniciais
const herois = [
  { nome: "Brabo", xp: 850 },
  { nome: "Rock", xp: 1500 },
  { nome: "Buterfly", xp: 3200 },
  { nome: "Titã", xp: 6200 },
  { nome: "Nina", xp: 7800 },
  { nome: "Draco", xp: 10500 }
];

// Exibir resultado
herois.forEach(heroi => {
  const nivel = classificarNivel(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel} (XP: ${heroi.xp})`);
});
