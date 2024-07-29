const warriorElement = document.getElementById('warrior'); 
const warriorImage = document.querySelector('#warrior img')
const dragonElement = document.querySelector('#dragon');
const dragonImage = document.querySelector('#dragon img');
const warriorHBElement = document.querySelector('#warrior-hb');
const dragonHBElement = document.querySelector('#dragon-hb');
let warriorHP = 100;
let dragonHP = 100;
const winnerElement = document.querySelector('#winner');

function randomHp(){
    return Math.floor(Math.random() * 100);
}

function sleep(time){
    let promise = new Promise(function(r) {
        setTimeout(function(){
            r(1);
        },time);
    });
    return promise;
}

async function warriorAttack(){
    await warriorForward();
    await warriorJump();
    await warriorBackward();
}
async function warriorForward(){
    let startPos = 4;
    let endPos = 44;
    while(startPos <= endPos){
        // Trqbva da e s neshto minimalno za da moje chovecheto da ne preskacha
        startPos += 0.2;
        warriorElement.style.left = `${startPos}rem`;
        // Suzdavame function sleep za da zabavim chovecheto
        await sleep(1);
    }
}
async function warriorJump(){
    let startPos = 12;
    let endPos = 20;
    warriorImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/jump.png')

    while(startPos <= endPos){
        startPos += 0.2;
        warriorElement.style.bottom = `${startPos}rem`;
        await sleep(1);
    }
    warriorImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/attack.png');

    while(startPos >= 12){
        startPos -= 0.2;
        warriorElement.style.bottom = `${startPos}rem`;
        await sleep(1);
    }
    dragonHP -= randomHp();
    if(dragonHP <= 0){
        dragonHP = 0;
        winnerElement.innerHTML = 'WARRIOR IS THE WINNER!';
    }
    dragonHBElement.style.width = `${dragonHP}%`;

    warriorImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/n-b.png');

}
async function warriorBackward(){
    let startPos = 45;
    let endPos = 4;
    while(endPos <= startPos){
        startPos -= 0.2;
        warriorElement.style.left = `${startPos}rem`;
        await sleep(1);
    }
    warriorImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/normal.png');
}

async function dragonAttack(){
    let startPos = 3;
    let endPos = 42;
    while(startPos <= endPos){
        startPos += 0.2;
        dragonElement.style.right = `${startPos}rem`;
        await sleep(1);
    }
    dragonImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/dragon-attack-1.png');
    await sleep(250);
    dragonImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/dragon-attack-2.png');
    await sleep(250);
    warriorHP -= randomHp();
    if(warriorHP <= 0){
        warriorHP = 0;
        winnerElement.innerHTML = 'DRAGON IS THE WINNER!';

    }
    warriorHBElement.style.width = `${warriorHP}%`;

    dragonImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/d-b.png');
    while(startPos >= 3){
        startPos -= 0.2;
        dragonElement.style.right = `${startPos}rem`;
        await sleep(1);
    }
    dragonImage.setAttribute('src', '/HTML,CSS, JS/HTML,CSS,JS Advanced/DragonWarriorGame/dragon-normal.png');
}