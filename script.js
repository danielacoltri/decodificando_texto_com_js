const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".msg");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// function btnCriptografar(){
//   if (textArea.value !== "") {
//     const textoMinusculoSemAcento = removeAcento(textArea.value);
//     const textoCriptografado = criptografar(textoMinusculoSemAcento);
//     mensagem.classList.remove("ImagemDeFundo")
//     podeCopiar = true
//     mensagem.value = textoCriptografado;
//     textArea.value = "";
//     retira_acentos(textArea);
//   }
// }

// function criptografar(stringCriptografada) {
//     let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
//     stringCriptografada = stringCriptografada.toLowerCase();

//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (stringCriptografada.includes(matrizCodigo[i][0])) {
//             stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
//         }
//     }
//     return stringCriptografada;
// }

// function btnDescriptografar() {
//   if (textArea.value !== "") {
//     executarDescriptografar(textArea.value);
//   } else if (mensagem.value !== "") {
//     executarDescriptografar(mensagem.value);
//   }
// }

// function executarDescriptografar(texto) {
//   const textoMinusculoSemAcento = removeAcento(texto);
//   const textoDescriptografado = descriptografar(textoMinusculoSemAcento);
//   mensagem.classList.remove("imagemDeFundo");
//   podeCopiar = true;
//   mensagem.value = textoDescriptografado;
//   textArea.value = "";
// }

// function descriptografar(stringDescriptografada) {
//     let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
//     stringDescriptografada = stringDescriptografada.toLowerCase();

//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (stringDescriptografada.includes(matrizCodigo[i][1])) {
//             stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
//         }
//     }
//     return stringDescriptografada;
// }

// function copiarTexto() {
//   if (podeCopiar) {
//     mensagem.selector();
//     mensagem.setSelectionRange(0.999999);
//     navigator.clipboard.writeText(mensagem.value);
//     alert("Texto Copiado");
//   }
// }

// const btnCopiar = document.querySelector(".btn-copiar");
// const textArea2 = document.querySelector(".msg");

// btnCopiar.addEventListener("click", (e) => {
//     navigator.clipboard.writeText(textArea2.value);});



// const textArea = document.querySelector(".text-area");
// const mensagem = document.getElementById(".msg");
// let podeCopiar = false;

function btnCriptografar(){
    if (textArea.value !== "") {
        const textoMinusculoSemAcento = removerAcento(textArea.value)
        const textoCriptografado = criptografar(textoMinusculoSemAcento);
        mensagem.value = textoCriptografado;
        textArea.value = "";
        retira_acentos(textArea);
    }
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return  stringCriptografada;
}

function btnDescriptografar(){
    if (textArea.value !== "") {
        executaDesencriptar(textArea.value)
    } else if (mensagem.value !== "") {
        executaDesencriptar(mensagem.value)
    }
}

function executaDesencriptar(texto){
    const textoMinusculoSemAcento = removeAcento(texto)
    const textoDescriptografado = Descriptografar(textoMinusculoSemAcento);
    // mensagem.classList.remove("imagemDeFundo");
    // podeCopiar = true;
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}

function Descriptografar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return  stringDesencriptada;
}

const btnCopiar = document.querySelector(".btn-copiar");
const textArea2 = document.querySelector(".msg");

btnCopiar.addEventListener("click", (e) => {
    navigator.clipboard.writeText(textArea2.value);});


function removerAcento (text)
{       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[áàãâ]','gi'), 'a');
    text = text.replace(new RegExp('[éèê]','gi'), 'e');
    text = text.replace(new RegExp('[íìî]','gi'), 'i');
    text = text.replace(new RegExp('[óòôõ]','gi'), 'o');
    text = text.replace(new RegExp('[úúû]','gi'), 'u');
    text = text.replace(new RegExp('[ç]','gi'), 'c');
    return text;
}