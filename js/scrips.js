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
let textoModeloCamisa;
let menuCamisas;

switch(menuCamisas){
    case 'lisa': 
        escolhaCamisa = '../img/ModeloLisa.png'
        textoModeloCamisa = 'Camisa <br> Lisa'        
        break
    case 'mercurio':
        escolhaCamisa = "../img/ModeloMercurio.png";
        textoModeloCamisa = 'Camisa de Mercúrio';
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
console.log(textoModeloCamisa)
console.log(escolhaCamisa)
//document.getElementById('imagemModeloCamisa').src = escolhaCamisa;
//document.getElementById('textoModeloCamisa').innerHTML = textoModeloCamisa;

