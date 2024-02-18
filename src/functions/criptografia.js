function criptografar(mensagem, chave) {
    let mensagemCifrada = '';
    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];
        if (char.match(/[a-z]/i)) {
        let codigo = mensagem.charCodeAt(i);
        if (codigo >= 65 && codigo <= 90) {
            char = String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            char = String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
        }
        }
        mensagemCifrada += char;
    }
    return mensagemCifrada;
}

function descriptografar(mensagemCifrada, chave) {
    return criptografar(mensagemCifrada, (26 - chave) % 26);
}

export {criptografar}