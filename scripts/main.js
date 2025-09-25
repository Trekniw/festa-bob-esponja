const programacao = document.getElementById('programacao'); //pega o botão.
const secaoAgenda = document.getElementById('agenda'); //pega a seção da agenda que está escondida.
programacao.addEventListener('click', () => { //espera o botão ser clicado.
secaoAgenda.classList.remove('escondido'); //tira a “cortina” da agenda, e ela aparece.
});
const personagensCards = document.querySelectorAll('.personagem-card'); //querySelectorAll: pega todos os elementos que tenham essa classe no HTML. Aqui ele encontra todos os <div class="personagem-card"
personagensCards.forEach(card => {
    const tooltip = card.querySelector('.tooltip'); // pega a nuvem de cada card

    card.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';   // mostra a nuvem
    });

    card.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';    // esconde a nuvem
    });
});

const containerBolhas = document.getElementById('background-bolhas');
function criarBolha() { //Cria dinamicamente um <div> no HTML (a bolha).
 const bolha = document.createElement('div');
 bolha.classList.add('bolha'); // Adiciona a classe .bolha → pega o estilo definido no CSS.
 const tamanho = Math.random() * 80 + 30; // Gera número entre 30 e 100 (em px). Gera um número aleatório entre 0 e 1. Multiplica esse número por 80. Agora o valor fica entre 0 e 80. Soma 30 no resultado. Agora o valor fica entre 30 e 100. 
 bolha.style.width = `${tamanho}px`; //Define o tamanho e posição horizontal da bolha.
 bolha.style.height = `${tamanho}px`;
 bolha.style.left = `${Math.random() * 100}%`;
 const duracao = Math.random() * 5 + 5; // Gera entre 5 e 10 segundos de duração.
 bolha.style.animationDuration = `${duracao}s`; 
 bolha.style.animationDelay = `${Math.random() * 5}s`; //Cada bolha flutua com um tempo diferente → efeito natural.
 containerBolhas.appendChild(bolha); //Coloca a bolha dentro do fundo
 setTimeout(() => {
 bolha.remove(); //Espera a animação acabar + 5s de segurança, depois remove do HTML.
 }, duracao * 1000 + 5000);
}
setInterval(criarBolha, 500); //A cada 0,5 segundos (500ms), cria uma nova bolha.

// lista de curiosidades do Bob Esponja
const curiosidades = [
  "O criador do Bob Esponja, Stephen Hillenburg, era biólogo marinho.", 
  "O Bob Esponja quase se chamava SpongeBoy.",                         
  "O desenho começou a ser exibido em 1999.",                           
  "A casa do Lula Molusco é baseada em uma concha de abóbora.",               
  "O Siri Cascudo é inspirado em um restaurante de frutos do mar real.", 
  "Gary, o caracol, se comunica com 'miau'.",                      
  "O episódio “Fenda da pedra” foi inspirado em uma experiência real do criador em uma cidade estranha durante uma viagem.",                 
  "O desenho já inspirou estudos científicos, como pesquisas sobre comportamento social em animais marinhos.",             
  "O episódio piloto foi exibido em 1º de maio de 1999.",             
  "Stephen Hillenburg fez um quadrinho educativo chamado 'The Intertidal Zone'." 
];

//  botão pelo ID para detectar o clique do usuário
const btnCuriosidade = document.getElementById('btn-curiosidade'); 

// parágrafo onde a curiosidade será exibida
const curiosidadeTexto = document.getElementById('curiosidade-texto');  

// Quando o botão for clicado, a função dentro do addEventListener será executada
btnCuriosidade.addEventListener('click', () => {
  
  // número aleatório entre 0 e o tamanho da lista de curiosidades - 1
  const indice = Math.floor(Math.random() * curiosidades.length);

  // Atualiza o texto do parágrafo com a curiosidade sorteada
  curiosidadeTexto.textContent = curiosidades[indice]; 
  // textContent substitui todo o conteúdo dentro do <p> pelo novo texto
});

