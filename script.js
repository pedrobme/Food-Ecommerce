function selecionarOpcao(elemento){

    if(elemento.parentElement.classList.contains("painel1")){

        const verificador = document.querySelector(".painel1 .selecionado")

        if(elemento.classList.contains("selecionado")){
            const iconeselecao = document.querySelector(".painel1 .selecionado .checkmark-on")
            elemento.classList.remove("selecionado");
            iconeselecao.classList.remove("checkmark-on");
            iconeselecao.classList.add("checkmark-off");
            alternarFechamento();
            return;
        }

        else if(verificador != null){
            const iconeselecao = document.querySelector(".painel1 .selecionado .checkmark-on")
            verificador.classList.remove("selecionado")
            iconeselecao.classList.remove("checkmark-on")
            iconeselecao.classList.add("checkmark-off")
        }

        elemento.classList.add("selecionado");
        const iconeselecao = document.querySelector(".painel1 .selecionado .checkmark-off");
        iconeselecao.classList.remove("checkmark-off")
        iconeselecao.classList.add("checkmark-on")
        alternarFechamento()
    }

    if(elemento.parentElement.classList.contains("painel2")){

        const verificador = document.querySelector(".painel2 .selecionado")

        if(elemento.classList.contains("selecionado")){
            const iconeselecao = document.querySelector(".painel2 .selecionado .checkmark-on")
            elemento.classList.remove("selecionado");
            iconeselecao.classList.remove("checkmark-on");
            iconeselecao.classList.add("checkmark-off");
            alternarFechamento()
            return;
        }

        else if(verificador != null){
            const iconeselecao = document.querySelector(".painel2 .selecionado .checkmark-on")
            verificador.classList.remove("selecionado")
            iconeselecao.classList.remove("checkmark-on")
            iconeselecao.classList.add("checkmark-off")
        }

        elemento.classList.add("selecionado");
        const iconeselecao = document.querySelector(".painel2 .selecionado .checkmark-off")
        iconeselecao.classList.remove("checkmark-off")
        iconeselecao.classList.add("checkmark-on")
        alternarFechamento()
    }

    if(elemento.parentElement.classList.contains("painel3")){

        const verificador = document.querySelector(".painel3 .selecionado")

        if(elemento.classList.contains("selecionado")){
            const iconeselecao = document.querySelector(".painel3 .selecionado .checkmark-on")
            elemento.classList.remove("selecionado");
            iconeselecao.classList.remove("checkmark-on");
            iconeselecao.classList.add("checkmark-off");
            alternarFechamento()
            return;
        }

        else if(verificador != null){
            const iconeselecao = document.querySelector(".painel3 .selecionado .checkmark-on")
            verificador.classList.remove("selecionado")
            iconeselecao.classList.remove("checkmark-on")
            iconeselecao.classList.add("checkmark-off")
        }

        elemento.classList.add("selecionado");
        const iconeselecao = document.querySelector(".painel3 .selecionado .checkmark-off")
        iconeselecao.classList.remove("checkmark-off")
        iconeselecao.classList.add("checkmark-on")
        alternarFechamento()
    }

}

function alternarFechamento(){
    if((document.querySelector(".painel1 .selecionado") != null) && (document.querySelector(".painel2 .selecionado") != null)  && (document.querySelector(".painel3 .selecionado") != null)){
        console.log("3selecionados")
        const botaoFechamento = document.querySelector(".fechar-pedido")
        botaoFechamento.innerHTML = "<p>Fechar pedido</p>"
        botaoFechamento.classList.add("fechamento-habilitado")
        botaoFechamento.classList.remove("desligar-pointer")
        botaoFechamento.classList.add("ligar-pointer")
    }
    if((document.querySelector(".painel1 .selecionado") === null) || (document.querySelector(".painel2 .selecionado") === null)  || (document.querySelector(".painel3 .selecionado") === null)){
        const botaoFechamento = document.querySelector(".fechar-pedido")
        console.log("algum nao selecionado")
        botaoFechamento.innerHTML = "<p>Selecione os 3 itens para fechar o pedido</p>"
        botaoFechamento.classList.remove("fechamento-habilitado")
        botaoFechamento.classList.remove("ligar-pointer")
        botaoFechamento.classList.add("desligar-pointer")
}
}

function fechamento(){
    const telaFechamento = document.querySelector(".tela-fechamento")
    telaFechamento.classList.remove("esconder")
    const body = document.body;
    body.style.overflowY = "hidden";

    const primeiraOpcao = document.querySelector(".painel1 .selecionado h1")

    const segundaOpcao = document.querySelector(".painel2 .selecionado h1")

    const terceiraOpcao = document.querySelector(".painel3 .selecionado h1")

    const precoPrimeiraOpcao = document.querySelector(".painel1 .selecionado .preco")

    const precoSegundaOpcao = document.querySelector(".painel2 .selecionado .preco")

    const precoTerceiraOpcao = document.querySelector(".painel3 .selecionado .preco")

    const precoTotal = Number(precoPrimeiraOpcao.innerHTML.replaceAll(',', '.')) + Number(precoSegundaOpcao.innerHTML.replaceAll(',', '.')) + Number(precoTerceiraOpcao.innerHTML.replaceAll(',', '.'))

    const precoTotalStr = precoTotal.toFixed(2).toString().replaceAll('.', ',')


    const addPrimeiraOpcao = document.querySelector(".primeiraOpcao")

    const addSegundaOpcao = document.querySelector(".segundaOpcao")

    const addTerceiraOpcao = document.querySelector(".terceiraOpcao")

    const addPrecoPrimeiraOpcao = document.querySelector(".precoPrimeiraOpcao")

    const addPrecoSegundaOpcao = document.querySelector(".precoSegundaOpcao")

    const addPrecoTerceiraOpcao = document.querySelector(".precoTerceiraOpcao")

    const addPrecoTotal = document.querySelector(".preco-total")

    addPrimeiraOpcao.innerHTML = primeiraOpcao.innerHTML
    addSegundaOpcao.innerHTML = segundaOpcao.innerHTML
    addTerceiraOpcao.innerHTML = terceiraOpcao.innerHTML
    addPrecoPrimeiraOpcao.innerHTML = precoPrimeiraOpcao.innerHTML
    addPrecoSegundaOpcao.innerHTML =  precoSegundaOpcao.innerHTML
    addPrecoTerceiraOpcao.innerHTML = precoTerceiraOpcao.innerHTML
    addPrecoTotal.innerHTML = precoTotalStr
}

function cancelar(){
    const telaFechamento = document.querySelector(".tela-fechamento")
    telaFechamento.classList.add("esconder")
    const body = document.body;
    body.style.overflowY = "initial";
    }

