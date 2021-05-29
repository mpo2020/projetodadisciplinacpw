/* mascaras*/
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

let escolhaCamisa;
let escritaCamisa;
let menuCamisas = 'lisa';

switch(menuCamisas){
    case 'lisa': 
        escolhaCamisa = "../img/ModeloLisa.png"
        escritaCamisa = 'Camisa Lisa'
        document.getElementById('imagemCamisa').src = escolhaCamisa;
        document.getElementById('escritaModeloCamisa').innerHTML = "bfbndjdsbd";
        break
    case 2:
        escolhaCamisa1 = "../img/ModeloMercurio.png";
        escritaCamisa = 'Camisa de Mercúrio';
        break
    default:
        escolhaCamisa = "../img/vazio.png";
        escritaCamisa = '';
        break

}
console.log(escritaCamisa)
console.log(escolhaCamisa)
// document.getElementById('imagemCamisa').src = escolhaCamisa;
// document.getElementById('escritaCamisa').innerHTML = escritaCamisa;

