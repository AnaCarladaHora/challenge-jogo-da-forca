let tentativas = 6;
let listaDinamica =[];
let palavraSecretaCategoria;
let palavraSecretaSorteada;


const palavras = [
    palavra001 = {
        nome: "RIO GRANDE DO SUL",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "BAHIA",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome: "RECIFE",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "ACRE",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome: "AMAPA",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "PARANA",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome: "FORTALEZA",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome: "MINAS GERAIS",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome: "SANTA CATARINA",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "AVIÃO",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "BLUSA",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "CARRO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome: "MESA",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SALADA",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "UVA",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome: "BALEIA",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "PIRIQUITOO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "GATO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "ABELHA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "SAPO",
        categoria:"ANIMAIS"
    }
];

criarPalavraSecreta(); // criar uma palavra aleatória
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length); // busca uma palavra aleatória

    palavraSecretaSorteada = palavras[indexPalavra].nome; // busca a palavra na categoria
    palavraSecretaCategoria = palavras[indexPalavra].categoria; // busca na categoria
}

montarPalavraNaTela() // cria a palavra na tela
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria"); // pega uma categoria
    categoria.innerHTML = palavraSecretaCategoria; // busca no HTML a palavra

    const palavraTela = document.getElementById("palavra-secreta"); // pega uma palavra na categoria
    palavraTela.innerHTML = ""; // busca no HTML

    for (i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){ // quando pegar uma palavra aleatória deixa ela indefinida
            
            listaDinamica[i] = "&nbsp;"   // espaço em branco
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class = 'letras'>" + listaDinamica[i] + "</div>"
            
        } else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class = 'letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true; // pega um tecla escolhida no teclado
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra); // funçao criada na linha 251
        comparaListas(letra); // função criada na linha 256
        montarPalavraNaTela(); //funçao criada na linha 222
    }
}

function mudarStyleLetra(tecla){ // funçao para mudar estilo do botão e letra escolhida
    document.getElementById(tecla).style.background = "#000000"; //fundo do botão fica preto
    document.getElementById(tecla).style.color = "#ffffff"; //letra fica branca
}

function comparaListas(letra){  
            // pega a posição do array
    const pos = palavraSecretaSorteada.indexOf(letra); 
    if (pos < 0 ){                                  // se errar a palavra sorteada
        tentativas--// reduz as tentativas          // carrega a imagem da forca
        carregaImagemForca();

        if(tentativas == 0){ // se as tentaivas acabarem encerra o jogo e aparece a mensagem
            document.getElementById("Mensagem-Final").innerHTML = "<span> GAME OVER <br> A palavra correta era </span>" + palavraSecretaSorteada;
        }
    }else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){ // se acerta uma letra adiciona essa letra
                listaDinamica[i] = letra; // se acerta uma letra continua
            }
        }
    }

    let vitoria = true; // variavel para terminar o jogo com vitoria
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){ // percorre as palavras de cada array para verificar se são iguais
            vitoria = false;
        }   
    }
     if(vitoria == true){
        document.getElementById("Mensagem-Final").innerHTML = "<span> YOU WIN!!! </span>"
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){ // para fazer as tentativas (a cada letra escolhida)
            case 5: // se errou 1 vez
                document.getElementById("imagem").style.background = "url('./assets/forca01.png')";
                break; // encerra um looping
            case 4: // se errou 2 vezes
                document.getElementById("imagem").style.background = "url('./assets/forca02.png')";
                break;
            case 3: // se errou 3 vezes
                document.getElementById("imagem").style.background = "url('./assets/forca03.png')";
                break;
            case 2: // se errou 4 vezes
                document.getElementById("imagem").style.background = "url('./assets/forca04.png')";
                break;
            case 1: // se errou 5 vezes
                document.getElementById("imagem").style.background = "url('./assets/forca05.png')";
                break;
            case 0: // se errou 6 vezes
                document.getElementById("imagem").style.background = "url('./assets/forca06.png')";
                break;
            default: // quando iniciar um novo jogo
                document.getElementById("imagem").style.background = "url('./assets/forca.png')";
                break;        
        }
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function(){
    location.reload(); //recarrega a pagina
});

let adicionarPalavra = document.querySelector("#nova-palavra");
    adicionarPalavra.addEventListener("click", function(e){
    e.preventDefault();
    palavras.push({ // para inserir uma nova palavra
        'nome' : document.getElementById('input-nova-palavra').value,
        'categoria' : document.getElementById('input-nova-categoria').value,
    });
    document.getElementById('input-nova-palavra').value = "";
    document.getElementById('input-nova-categoria').value = "";
});















