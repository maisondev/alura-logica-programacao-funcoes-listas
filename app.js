let tituloH1 = document.querySelector("h1");
tituloH1.textContent = "Hora do Desafio";

function getConsole(){
    console.log("O botão foi clicado");
}

function getAlerta(){
    alert("Eu amo JS");
}

function getPrompt(){
   let cidade = prompt("Digite o nome de uma cidade do Brasil");
   alert(`Estive em ${cidade} e lembrei de você`);
}

function getSoma(){
let numero1 = prompt("Digite o primeiro número");
let numero2 = prompt("Digite o segundo número");
alert(`o resultado da soma é ${parseInt(numero1)+parseInt(numero2)}`);
}