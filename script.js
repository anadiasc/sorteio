let hinosCancoes = {
    1: "Hino Nacional",
    2: "Canção da PMPI",
    3: "Hino do Piauí",
    4: "Canção do CFAP",
    5: "Hino da Bandeira",
    6: "Canção Fibra de Herói"
};

let qtd = 0;

const buttonSorteio = document.querySelector('.button')

buttonSorteio.addEventListener('click', sortearHinosCancoes);

function sortearHinosCancoes(){
    qtd++
    num = getRandomInt(1,6);
    mostrarResultado(hinosCancoes[num], qtd);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const containerResultado = document.querySelector('.resultado');

function mostrarResultado(resultado, qtd){
    const p = document.createElement('p');
    p.innerText = `${qtd}. ${resultado}`;

    containerResultado.appendChild(p);
};