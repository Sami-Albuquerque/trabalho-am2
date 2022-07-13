let btn = document.getElementById("search-button");

if(btn != null){
    console.log("cheguei");
} else {
    console.log("não achou");
}

let text = document.getElementById("search-input");

let inputText = document.getElementById("carouselExampleIndicators");
let innerHTML = inputText.innerHTML;
//console.log(innerHTML);

//Usei o recurso de Expressão Regular que é muito bacana para buscas em strings longas. Vale conhecer!
btn.addEventListener("click", () => {
    let inputValue = text.value;

    let index = innerHTML.indexOf(inputValue);
    let string = "/" + inputValue + "/gi";
    console.log(string);
    if (index >= 0){
        let result = innerHTML.replace(string,
            '<b style="background-color: #ff0; font-size:100%">$&</b>');

        inputText.innerHTML = result;
        //console.log(result);
    }
});