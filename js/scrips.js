/* mascaras*/

/*---------------------------------------QUESTÃO 1------------------------------------------------------------------------------------------------------------ 
quando é clicado na cor branca ou preta na pagina html chama seu respectivo modal e quando clicado em fechar faz com que o modal desapareça*/
function mascaraPreta(){
    document.getElementById('mascara-preta').style.display = 'block';        
}
function fecharMascaraPreta(){ 
    document.getElementById('mascara-preta').style.display = 'none';        
}
function mascaraBranca(){
    document.getElementById('mascara-branca').style.display = 'block';        
}
function fecharMascaraBranca(){ 
    document.getElementById('mascara-branca').style.display = 'none';        
}
/*fim mascaras*/

/* Camisas*/
/*--------------------------------------------------QUESTÃO2--------------------------------------------------------------------------------------------------*/
function mostrarCamisa(modelo){/* essa função quando chamada no html troca a o texto com o nome do produto  e a foto no campo indicado pela questão.*/

    let escolhaCamisa;
    let textoModeloCamisa;
        
    switch(modelo){
        case 'lisa': 
            escolhaCamisa = '../img/ModeloLisa.png'
            textoModeloCamisa = 'Camisa <br> Lisa'        
            break
        case 'mercurio':
            escolhaCamisa = "../img/ModeloMercurio.png";
            textoModeloCamisa = 'Camisa<br> de Mercúrio';
            break
        case 'venus':
            escolhaCamisa = "../img/ModeloVenus.png";
            textoModeloCamisa = 'Camisa<br> de Vênus';
            break
        case 'terra':
            escolhaCamisa = "../img/ModeloTerra.png";
            textoModeloCamisa = 'Camisa<br> de Terra';
            break
        case 'marte':
            escolhaCamisa = "../img/ModeloMarte.png";
            textoModeloCamisa = 'Camisa<br> de Marte';
            break
        case 'jupiter':
            escolhaCamisa = "../img/ModeloJupiter.png";
            textoModeloCamisa = 'Camisa<br> de Jupiter';
            break
        case 'saturno':
            escolhaCamisa = "../img/ModeloSaturno.png";
            textoModeloCamisa = 'Camisa <br> de Saturno';
            break
        case 'urano':
            escolhaCamisa = "../img/ModeloUrano.png";
            textoModeloCamisa = 'Camisa <br> de Urano';
            break
        case 'netuno':
            escolhaCamisa = "../img/ModeloNetuno.png";
            textoModeloCamisa = 'Camisa <br> de Netuno';
            break
        case 'plutao':
            escolhaCamisa = "../img/ModeloPlutao.png";
            textoModeloCamisa = 'Camisa <br> de Plutão';
            break
}
    document.getElementById('imagemModeloCamisa').src = escolhaCamisa;
    document.getElementById('textoModeloCamisa').innerHTML = textoModeloCamisa;
}
/* fim camisas*/
/*Compras*/

/*-------QUESTÃO 3 as modificações propostas pela questão 3 foram feitas totalmente na pagina compras.html pois eram apenas modificações na estrutura do próprio html*/

/*------------------------------------------------------------QUESTÃO 4--------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------(a)-----------------------------------------------------------------------------------------*/

function ehMascara() {/* esta função retorna verdadeiro se o produto escolhido for mascara ou falso caso seja outra coisa(no caso camisa). A substring foi usado para atribuir apenas a primeira letra da value das selections e a variavel a qual seria feito o if para verdadeiro ou falso*/
    let escolhaProduto = document.getElementById('produto').value;
    let tipoProduto = escolhaProduto.substring(0,1);
    
    if(tipoProduto === 'M') {
        
        return true;

    } else {
        
       return false; 
    }

}

/*---------------------------------------------------------------(b)-----------------------------------------------------------------------------------------*/

function habilitaCor(){ /* Esta função usa resultado da função ehMascara para atribuir o resultado  a variavel tipoProduto a qual será testada se for verdadeiro significa que o produto é uma mascara e assim desabilita os campos modelo, tamanho e as cores azul e lilas usando o document.getElementById para mudar para true a tag disabled dos respectivos campos que foram desabilitados e se o resultado for falso todos os campos serão habilitados usando o document.getElementById para mudar a tag disabled para falso dos campos que estão habilitados caso produto seja uma camisa  */
    
    let tipoProduto = ehMascara();

    if (tipoProduto === true) {

        document.getElementById("corProduto").disabled = false;
        document.getElementById("tamanhoProduto").disabled = true;
        document.getElementById("modeloProduto").disabled = true;    
        document.getElementById("produtoAzul").disabled = true;
        document.getElementById("produtoLilas").disabled = true;   
           
    } else if(tipoProduto=== false){

        document.getElementById("corProduto").disabled = false;
        document.getElementById("tamanhoProduto").disabled = false;
        document.getElementById("modeloProduto").disabled = false;
        document.getElementById("produtoAzul").disabled = false;
        document.getElementById("produtoLilas").disabled = false;        
    
    }

    zerarSelecaoDeProdutos();   

}

/*------------------------------------------------------------QUESTÃO 5--------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------(a)-----------------------------------------------------------------------------------------*/

function estaPronto() { /* esse função ao ser chamada teste se todos os os campos da seleção de produtos estão preenchidos  caso sim retorna verdadeiro, caso não retorna falso. Também foi adicionado um teste para saber se era mascara ou camisa pois campos diferentes deviam esta preenchidos para cada produto.(para camisa produto, cor, tamanho, e modelo) e para (mascara produto e cor) para esse teste foi utilizado o retorno da função é ehMascara para diferenciar se era mascara ou camisa dentro desta função*/

    let tipoProdutoEstaPronto = ehMascara()
    let validacaoProduto;
    let validacaoCor;
    let validacaoTamanho;
    let validacaoModelo;

    if (tipoProdutoEstaPronto === true) {
        validacaoProduto = document.forms["formularioCompra"]["nomeProduto"].value;
        validacaoCor = document.forms["formularioCompra"]["nomeCor"].value;
        if (validacaoProduto !== 'vazio' && validacaoCor !== 'vazio') {
        return true;
        } else {
            return false;
        }               
             
    } else if(tipoProdutoEstaPronto === false){
        
        validacaoProduto = document.forms["formularioCompra"]["nomeProduto"].value;
        validacaoCor = document.forms["formularioCompra"]["nomeCor"].value;
        validacaoTamanho = document.forms["formularioCompra"]["nomeTamanho"].value;
        validacaoModelo = document.forms["formularioCompra"]["nomeModelo"].value;
        
        if (validacaoProduto !== 'vazio' && validacaoCor !== 'vazio' && validacaoTamanho !== 'vazio' && validacaoModelo !== 'vazio') {
        return true;
        } else {
            return false;
        }
    }  
}

/*---------------------------------------------------------------(b)-----------------------------------------------------------------------------------------*/

function validacaoDaSelecaoDosProdutos() { /* essa função usa o return da função estaPronto() para que se o resultado for true ela joga as descrições abreviadas e o preço para seus devidos campos, e tambem foi adicionado um teste para saber se e mascara ou camisa usando o return da função ehMascara pois quando for mascar não seria pego valores dos campos tamanho e modelo */
    
    let tipoProduto = ehMascara();
    let validacaoProdutoCamposPreenchidos = estaPronto();
    let nomeProdutoString;
    let corProdutoString;
    let tamanhoProdutoString;
    let modeloProdutoString;
    let precoProduto;
    let concatenandoStringProdutos

    if (validacaoProdutoCamposPreenchidos === true) {
        if (tipoProduto === true ) {
            
            nomeProdutoString = document.getElementById("produto").value;
            corProdutoString = document.getElementById("corProduto").value;
            
            precoProduto = 35.00

            nomeProdutoString = nomeProdutoString.substring(0,3) + '. ' + nomeProdutoString.substring(7,14);
            corProdutoString = corProdutoString.substring(0,2)

            concatenandoStringProdutos = [nomeProdutoString + ' - ' + corProdutoString];
            

        } else if (tipoProduto === false) {

            nomeProdutoString = document.getElementById("produto").value;
            corProdutoString = document.getElementById("corProduto").value;
            tamanhoProdutoString = document.getElementById("tamanhoProduto").value;
            modeloProdutoString = document.getElementById("modeloProduto").value;
            
            precoProduto = 70.00

            nomeProdutoString = nomeProdutoString.substring(0,3) + '. ' + nomeProdutoString.substring(6,14);
            corProdutoString = corProdutoString.substring(0,2);

            concatenandoStringProdutos = [nomeProdutoString + ' - ' + corProdutoString + ' - ' + tamanhoProdutoString + ' - ' + modeloProdutoString];
            
        }
        document.getElementById('textoSelecaoProdutos').value = concatenandoStringProdutos;
        document.getElementById('precoProduto').value = precoProduto;
        
    }
}

/*---------------------------------------------------------------(c)-----------------------------------------------------------------------------------------*/

function limparCampos() { /* essa função ao ser chamada clicando no botão limpar reseta para como estavam quando a pagina foi carregada os campos preenchidos da field seleção de produtos e lista de compras*/
    
    document.getElementById("produto").value = "vazio";
    document.getElementById("corProduto").value = "vazio";
    document.getElementById("tamanhoProduto").value = "vazio";
    document.getElementById("modeloProduto").value = "vazio";
    document.getElementById("precoProduto").value = "";
    document.getElementById("textoSelecaoProdutos").value = "";
    document.getElementById("listaProdutos").value = "";


    document.getElementById('corProduto').disabled = true;
    document.getElementById('tamanhoProduto').disabled = true;
    document.getElementById('modeloProduto').disabled = true;

}

/*---------------------------------------------------------------(d)-----------------------------------------------------------------------------------------*/
let somaPrecos = 0
let concatenacaoListaProdutos = ''

/* as duas variaveis acima foram declaradas em escopo global e atribuido valor a elas nesse escopo pois comprarProduto()*/

function comprarProduto() { /* essa função é chamada através do clique no botão comprar ela usa o return da função estaPronto() caso está resulte em true ela cria a lista de comrpa com o produto selecionado concatenando varios deles na <textarea> e joga o preço  para o total, e somando com o preço de cada produto escolhido, a função estaPronto() retorne falso um alert aparece na tela*/
    let comprarProdutoVerificacao = estaPronto()
    
    if (comprarProdutoVerificacao === true){

        let especificacaoProdutoListaCompra
        let precoTotalProdutoListaCompra

        especificacaoProdutoListaCompra = document.getElementById('textoSelecaoProdutos').value
        precoTotalProdutoListaCompra = document.getElementById('precoProduto').value
        precoTotalProdutoListaCompra = parseInt(precoTotalProdutoListaCompra)

        somaPrecos = somaPrecos +  precoTotalProdutoListaCompra        
        concatenacaoListaProdutos = concatenacaoListaProdutos +  especificacaoProdutoListaCompra + `\n`

        document.getElementById('listaProdutos').value = concatenacaoListaProdutos;
        document.getElementById('totalPreco').value =  somaPrecos
    } else {
        alert('Definição do produto não está completa!')
    }

}
/*------------------------------------------------------------------------------------Extra-----------------------------------------------------------------*/

function zerarSelecaoDeProdutos(){/* essa função foi feita para que ao mudar o produto os outros campos sejam reiniciados para evitar 'BUGs'*/

    document.getElementById("corProduto").value = 'vazio';
    document.getElementById("tamanhoProduto").value = "vazio";
    document.getElementById("modeloProduto").value = "vazio";
}
