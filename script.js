const addPrimeiraOpcao = document.querySelector(".primeiraOpcao")

const addSegundaOpcao = document.querySelector(".segundaOpcao")

const addTerceiraOpcao = document.querySelector(".terceiraOpcao")

const addPrecoPrimeiraOpcao = document.querySelector(".precoPrimeiraOpcao")

const addPrecoSegundaOpcao = document.querySelector(".precoSegundaOpcao")

const addPrecoTerceiraOpcao = document.querySelector(".precoTerceiraOpcao")

const addPrecoTotal = document.querySelector(".preco-total")

let novoClienteConst = 0;

let nome;

let celular;

let rua;

let numero;

let bairro;

let complemento;


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

function fechamento(removeEsconder, addEsconder){
    document.querySelector(addEsconder).classList.add("esconder")
    document.querySelector(removeEsconder).classList.remove("esconder")
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

function cancelar(addEsconder){
    document.querySelector(addEsconder).classList.add("esconder")
    const body = document.body;
    body.style.overflowY = "initial";
    }

function mensagemWhatsapp() {
    console.log('oi')
    if(novoClienteConst==0){

    mensagem = `*Cliente já possui cadastro.*\n\nCliente: ${nome}\nCelular: ${celular}\n\nPedido:\n-${addPrimeiraOpcao.innerHTML} R$${addPrecoPrimeiraOpcao.innerHTML}\n-${addSegundaOpcao.innerHTML} R$${addPrecoSegundaOpcao.innerHTML}\n-${addTerceiraOpcao.innerHTML} R$${addPrecoTerceiraOpcao.innerHTML}\n\n-Total: R$${addPrecoTotal.innerHTML}.`
    }

    if(novoClienteConst==1){
    mensagem = `*Cliente novo! Dados do cadastro:*\nNome: ${nome}\nCelular: ${celular}\nRua: ${rua}\nNumero: ${numero}\nBairro: ${bairro}\nComplemento: ${complemento}\n\n\nPedido:\n-${addPrimeiraOpcao.innerHTML} R$${addPrecoPrimeiraOpcao.innerHTML}\n-${addSegundaOpcao.innerHTML} R$${addPrecoSegundaOpcao.innerHTML}\n-${addTerceiraOpcao.innerHTML} R$${addPrecoTerceiraOpcao.innerHTML}\n\n-Total: R$${addPrecoTotal.innerHTML}.`
    }

    let encode = encodeURIComponent(mensagem)
    const url = 'https://api.whatsapp.com/send?phone=5585998082727&text='+encode
    const win = window.open(url, '_blank');
    win.focus();

    novoClienteConst=0;
}

function perguntaCadastro(removeEsconder){
    document.querySelector(removeEsconder).classList.remove('esconder')
}

function trocarTela(removeEsconder, addEsconder){
    document.querySelector(addEsconder).classList.add('esconder')
    document.querySelector(removeEsconder).classList.remove('esconder')
}

function confirmarCadastro(removeEsconder,addEsconder){
    document.querySelector(addEsconder).classList.add('esconder')
    document.querySelector(removeEsconder).classList.remove('esconder')

    nome = document.getElementById("cadastro-nome").value;
    document.getElementById("confirmacao-nome").innerHTML = nome;
    document.getElementById("cadastro-nome").value = null;

    celular = document.getElementById("cadastro-celular").value;
    document.getElementById("confirmacao-celular").innerHTML = celular;
    document.getElementById("cadastro-celular").value = null;

    rua = document.getElementById("cadastro-rua").value;
    document.getElementById("confirmacao-rua").innerHTML = rua;
    document.getElementById("cadastro-rua").value = null;

    numero = document.getElementById("cadastro-numero").value;
    document.getElementById("confirmacao-numero").innerHTML = numero;
    document.getElementById("cadastro-numero").value = null;

    bairro = document.getElementById("cadastro-bairro").value;
    document.getElementById("confirmacao-bairro").innerHTML = bairro;
    document.getElementById("cadastro-bairro").value = null;

    complemento = document.getElementById("cadastro-complemento").value;
    document.getElementById("confirmacao-complemento").innerHTML = complemento;
    document.getElementById("cadastro-complemento").value = null;
}

function confirmarInformacao(removeEsconder,addEsconder){
    document.querySelector(addEsconder).classList.add('esconder')
    document.querySelector(removeEsconder).classList.remove('esconder')

    nome = document.getElementById("informar-nome").value;
    document.getElementById("confirmacao-nome-cadastrado").innerHTML = nome;
    document.getElementById("informar-nome").value = null;

    celular = document.getElementById("informar-celular").value;
    document.getElementById("confirmacao-celular-cadastrado").innerHTML = celular;
    document.getElementById("informar-celular").value = null;
}

function novoCliente(removeEsconder,addEsconder){
    novoClienteConst = 1;
    fechamento(removeEsconder,addEsconder)
}