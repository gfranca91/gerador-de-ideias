const creativeIdeas = [
  "Um gerador de paletas de cores aleatórias para designers.",
  "Uma calculadora de tempo para cozinhar um ovo perfeito (mole, médio, duro).",
  "Um aplicativo que sugere filmes ou séries baseado no seu humor atual.",
  "Um site com sons ambientes para ajudar a concentração (chuva, café, floresta).",
  "Um quiz divertido sobre curiosidades aleatórias do mundo.",
  "Um conversor de unidades de medida com um toque de humor (ex: 'quantos pães de queijo cabem em um metro?').",
  "Um gerador de nomes de personagens para histórias ou jogos.",
  "Uma página que mostra citações motivacionais ou inspiradoras aleatoriamente.",
  "Um pequeno jogo de 'pedra, papel, tesoura' contra o computador.",
  "Uma lista de tarefas interativa com animações de 'tarefa concluída'.",
  "Um site que conta piadas aleatórias sobre programação ou tecnologia.",
  "Um cronômetro pomodoro simples para focar no trabalho.",
  "Um aplicativo para gerar senhas seguras e fáceis de lembrar.",
  "Uma página com fatos aleatórios sobre animais fofos.",
  "Um conversor de moedas fictícias (ex: moedas de um universo de fantasia).",
  "Um gerador de mensagens de 'bom dia' ou 'boa noite' com emojis.",
  "Um mapa interativo que mostra seu local atual e um fato interessante sobre ele.",
  "Um gerador de desculpas criativas para quando você não quer sair de casa.",
  "Um placar de pontos para dois jogadores, com botões para adicionar/subtrair pontos.",
  "Uma página que exibe um meme aleatório a cada clique.",
  "Um site que exibe uma 'curiosidade do dia' sobre a vida animal.",
  "Um gerador de nomes de bandas de rock aleatórios e engraçados.",
  "Uma ferramenta para calcular quantos cafés você pode tomar antes de ter tremores.",
  "Um 'flip-card' digital com um fato interessante na frente e a resposta atrás.",
  "Um gerador de 'emojis do dia' que combina emojis aleatoriamente.",
  "Uma página que toca um som de vitória quando você clica em um botão de 'missão cumprida'.",
  "Um gerador de desculpas para chegar atrasado que são hilárias e pouco críveis.",
  "Um aplicativo simples para contar o número de vezes que você respira por minuto (apenas um botão de 'iniciar' e 'parar').",
  "Um gerador de frases de para-choque de caminhão com sabedoria duvidosa.",
  "Um site que recomenda um livro clássico aleatório a cada clique.",
  "Um contador regressivo para o final do expediente ou do fim de semana.",
  "Um gerador de 'receitas malucas' combinando ingredientes improváveis.",
  "Uma ferramenta para simular o lançamento de um dado virtual de 6, 10 ou 20 faces.",
  "Um site que exibe um 'provérbio popular' brasileiro aleatoriamente.",
  "Um gerador de títulos de filmes B de terror dos anos 80.",
  "Um validador de CPF (apenas a lógica básica de formatação).",
  "Uma página com um 'botão do pânico' que toca sons engraçados.",
  "Um site que lista um 'desafio de programação fácil do dia'.",
];

const generateButton = document.getElementById("generateButton");
const ideaDisplay = document.getElementById("ideaDisplay");
const themeToggleButton = document.getElementById("themeToggleButton");
const body = document.body;

function generateIdea() {
  const randomIndex = Math.floor(Math.random() * creativeIdeas.length);
  const randomIdea = creativeIdeas[randomIndex];
  ideaDisplay.textContent = randomIdea;
}

function toggleTheme() {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

generateButton.addEventListener("click", generateIdea);
themeToggleButton.addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }

  generateIdea();
});
