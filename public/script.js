//const { search } = require("../routes");
let btn = document.getElementById("search-button");
let text = document.getElementById("search-input");
let found = false;
let searchMade = false;
let x;

let aux;
let auxDoc;
let auxHTML;
let original = [];

let HTML;
let doc;

for (let i = 0; i < 5; i++) {
    if (!searchMade) {
        aux = "text" + i.toString();
        auxDoc = document.getElementById(aux);
        auxHTML = auxDoc.innerHTML;
        original[i] = auxHTML;
    }
}

//Usei o recurso de Expressão Regular que é muito bacana para buscas em strings longas. Vale conhecer!
btn.addEventListener("click", () => {
    found = false;
    if (searchMade) {
        clearTexts();
    }

    let input = (text.value).toString();
    
    if (input.includes(" ")) {
        alert("Só pode pesquisar uma palavra por vez!");
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (!found) {
                x = "text" + i.toString();
                console.log(x);
                doc = document.getElementById(x);
                HTML = doc.innerHTML;
                console.log(HTML);
                searchWord(text.value);
            }
            else {
                console.log("já achei");
            }
        }
    }
});

function searchWord(word) {
    let index = HTML.indexOf(word);

    if (index >= 0) {
        let result = HTML.replace(RegExp(word + "(?!([^<]+)?<)"),
            '<b style="background-color: #ff0; font-size:100%">$&</b>');

        found = true;
        searchMade = true;
        console.log(result);
        doc.innerHTML = result;
    };
}

function clearTexts() {
    for (let i = 0; i < 5; i++) {
        let aux = "text" + i.toString();
        auxDoc = document.getElementById(aux);
        auxHTML = original[i];
        auxDoc.innerHTML = auxHTML;
    }
    searchMade = false;
}