let turnOn = document.getElementById('turnOn');
let turnOff = document.getElementById('turnOff');
let lamp = document.getElementById('lamp');

function isBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if (!isBroken()){
        lamp.src='/lampProject/ligada.jpg';
    }
    
}

function lampOff(){
    if (!isBroken()){
        lamp.src='/lampProject/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src='/lampProject/quebrada.jpg';
}


turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);