const elemTexto = document.querySelector(".sobre");
const elemInformacoes = document.querySelector(".informacoes");
const elemBotaoInformacoes = document.querySelector(".botao-informacoes");
const elemBotaoLight = document.querySelector(".botao-light");
const elemBotaoDark = document.querySelector(".botao-dark");

elemTexto.textContent = "Sobre mim:"

function alterarClasse() {
    console.log("Você clicou no texto Sobre mim");

    elemTexto.textContent = "Sobre mim (clicado)";
}

elemTexto.addEventListener("click", alterarClasse);

elemBotaoInformacoes.addEventListener("click", function () {
    elemInformacoes.classList.toggle("visivel")

    console.log(elemInformacoes.classList.contains('visivel'));

    if (elemInformacoes.classList.contains('visivel')) {
        elemBotaoInformacoes.textContent = "Ocultar Informações";
    } else {
        elemBotaoInformacoes.textContent = "Exibir Informações";
    }
})

elemBotaoLight.addEventListener("click", function(){
    document.body.classList.add("light")
})

elemBotaoDark.addEventListener("click", function(){
    document.body.classList.remove("light")
})