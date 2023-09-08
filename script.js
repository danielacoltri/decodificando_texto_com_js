const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".msg");

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