const addPrimeiraOpcao = document.querySelector(".primeiraOpcao")

const addSegundaOpcao = document.querySelector(".segundaOpcao")

const addTerceiraOpcao = document.querySelector(".terceiraOpcao")

const addPrecoPrimeiraOpcao = document.querySelector(".precoPrimeiraOpcao")

const addPrecoSegundaOpcao = document.querySelector(".precoSegundaOpcao")

const addPrecoTerceiraOpcao = document.querySelector(".precoTerceiraOpcao")

const addPrecoTotal = document.querySelector(".preco-total")

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

function mensagemWhatsapp() {
    alert('O pedido está quase finalizado, precisamos apenas de algumas informações, não se preocupe, é rapidinho! 💗')
    const nomeCliente = prompt('Qual o seu nome?')
    const celularCliente = prompt('Qual o número do seu celular com DDD?')
    const diaPedido = prompt('Qual data você deseja retirar o seu pedido? (antecedencia minima de 24 horas)')
    const horarioPedido = prompt('Que horas você deseja retirar o seu pedido? (8:00 às 21:00)')
    alert('Muito obrigado! Você será redirecionado a página do whatsapp. Basta checar as informações e enviar o seu pedido!')

    const mensagem = 
    
    `
    Cliente: ${nomeCliente}

    Celular: ${celularCliente}

    dia da retirada: ${diaPedido}

    horario da retirada: ${horarioPedido}

    Primeira opção: ${addPrimeiraOpcao.innerHTML}, preço: ${addPrecoPrimeiraOpcao.innerHTML}

    Seguda opção: ${addSegundaOpcao.innerHTML}, preço: ${addPrecoSegundaOpcao.innerHTML}

    Terceira opção: ${addTerceiraOpcao.innerHTML}, preço: ${addPrecoTerceiraOpcao.innerHTML}

    Total: ${addPrecoTotal.innerHTML}
    
    `

    const url = 'https://api.whatsapp.com/send?phone=5585998082727&text='+ decodeURI(mensagem)
    const win = window.open(url, '_blank');
    win.focus();
}