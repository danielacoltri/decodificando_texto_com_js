const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".msg");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnCriptografar(){
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
  }

function criptografar(stringCriptografada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function btnDescriptografar(){
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
    hideNoResultContainer();
    showResultContainer();
  }

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    hideNoResultContainer();
    showResultContainer();
    return stringDescriptografada;
}

const btnCopiar = document.querySelector(".btn-copiar");
const textArea2 = document.querySelector(".msg");

btnCopiar.addEventListener("click", (e) => {
    navigator.clipboard.writeText(textArea2.value);});


// /*Função que some com a imagem e o texto do text area msg*/
// var x = "Mozilla";
// var empty = "";

// console.log(
//   "Mozilla possui " + x.length + " unidades de código de comprimento",
// );
// /* "Mozilla possui 7 unidades de código de comprimento" */

// console.log("A string vazia possui um comprimento de " + empty.length);
// /* "A string vazia possui um comprimento de 0" */


    // // Obtém o elemento de input
    // const campoDeTexto = document.getElementById('campoDeTexto');
    
    // // Função para verificar o valor do campo de texto e esconder a imagem de fundo
    // function verificarTexto() {
    //   const valorCampo = campoDeTexto.value;
    //   const imagemDeFundo = document.body.style.backgroundImage;

    //   if (valorCampo.length > 0) {
    //     // Se houver caracteres no campo de texto, esconde a imagem de fundo
    //     document.body.style.backgroundImage = 'none';
    //   } else {
    //     // Se o campo de texto estiver vazio, mostra a imagem de fundo novamente
    //     document.body.style.backgroundImage = imagemDeFundo;
    //   }
    // }

    // // Adicione um ouvinte de evento ao campo de texto para chamar a função
    // campoDeTexto.addEventListener('input', verificarTexto);

    function showResultContainer() {
        resultContainer.classList.add("active");
      }
      
      function hideNoResultContainer() {
        noResultContainer.classList.add("inative");
      }
      
      function showNoResultContainer() {
        noResultContainer.classList.remove("inative");
      }