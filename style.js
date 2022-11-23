//Aqui nós DECLARAMOS as variáveis que já estão criadas no html

const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

// Aqui criamos uma função para fazer uma varrudura na string e
//parar uma ação caso condições forem verdadeiras. No caso abaixo,
//se o endereço de img for "quebrada.jpg". "Indexof" é o método que faz
//uma busca de string dentro de outra string

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

// Aqui CRIAMOS duas váriável que não está declarada no html

function lampOn(){
    //Aqui fazemos um IF/ELSE para verificar se a função islampbrkoken é verdadeira

    if (!isLampBroken() ){
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if (!isLampBroken () ){
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

// Aqui nós damos funcionalidade ao botão "ligar"

turnOn.addEventListener ('click', lampOn);

//  Aqui nós damos funcionalidade ao botão "desligar"

turnOff.addEventListener ('click', lampOff);

// Aqui é adicionado o evento com o mouse. Quando o ponteiro passar por cima da imagem

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);

// Aqui é adicionado o evento para quando dar dois clicks na imagem

lamp.addEventListener ('dblclick', lampBroken);