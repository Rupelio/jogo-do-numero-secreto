let listDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let count = 0;

function exibitTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2})
}

function mensagemInicial(){
    exibitTextoNaTela("h1", "Jogo do número secreto");
    exibitTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial()

function verificarChute(){
    count++;
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibitTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = count > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o numero secreto em ${count} ${palavraTentativa}`;
        exibitTextoNaTela('p', mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroSecreto){
            exibitTextoNaTela('p', 'O numero secreto é menor que o chute');
        } else{
            exibitTextoNaTela('p', 'O numero secreto é maior que o chute');
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementoLista = listDeNumerosSorteados.length;

    if(quantidadeElementoLista == numeroLimite){
        listDeNumerosSorteados = [];
    }

    if (listDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    count = 0;
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true)
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}