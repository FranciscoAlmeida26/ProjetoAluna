/* lestas para serem trocadas 
As "chaves" de criptografia que utilizaremos são:
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
console.log(novaFrase); // "Etsx é umx frxsx dy exymplx"*/

function criptografar(){
    let texto=window.document.getElementById('texto').value;
    if(texto=='Digite seu texto'){
        texto=0
    }    
    if(texto==0){
        alert("coloque um texto na caixa de texto!!")
    }
    let novotexto= texto.split('').map(char =>{
        if (char === 'a'){
            return 'ai ';
        } else if(char === 'e'){
            return ',enter ,';
        }else if(char === 'i'){
            return 'imes ';
        }else if(char === 'o'){
            return 'ober ';
        }else if(char === 'u'){
            return 'ufat ';
        }
        return char;
    }).join('');
    console.log(novotexto)
    const imagem=window.document.getElementById("img")
    imagem.remove();
    window.document.getElementById("h5").innerText=''
    window.document.getElementById("resultado").innerText=novotexto
}

function descriptografar(){
    let texto=window.document.getElementById('texto').value;
    if(texto=='Digite seu texto'){
        texto=0
    }    
    if(texto==0){
        alert("coloque um texto na caixa de texto!!")
    }
    let destexto= texto.split(' ').map(char =>{
        if (char === 'ai'){
            return 'a';
        } else if(char === 'enter'){
            return 'e';
        }else if(char === 'imes'){
            return 'i';
        }else if(char === 'ober'){
            return 'o';
        }else if(char === 'ufat'){
            return 'u';
        }
        return char;
    }).join('');
    console.log(destexto)
    window.document.getElementById("h5").innerText=''
    window.document.getElementById("resultado").innerText=destexto
}