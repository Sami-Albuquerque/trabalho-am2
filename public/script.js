let btn = document.getElementById("search-button");
let text = document.getElementById("search-input");

let inputText = document.getElementById("carouselExampleIndicators");
let innerHTML = inputText.innerHTML;

//Usei o recurso de Expressão Regular que é muito bacana para buscas em strings longas. Vale conhecer!
btn.addEventListener("click", () => {
    let inputValue = text.value;
    searchWord(inputValue);
});

function searchWord(word){
    let index = innerHTML.indexOf(word);

    if (index >= 0){
        let result = innerHTML.replace(RegExp(word + "(?!([^<]+)?<)"),
            '<b style="background-color: #ff0; font-size:100%">$&</b>');

        inputText.innerHTML = result;
        
        console.log(result);
    };
}