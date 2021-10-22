function randomNumber(){
var rand1 =Math.floor(Math.random()*6)+1;
var rand2 =Math.floor(Math.random()*6)+1;

var dict={1:'images/dice1.png',2:'images/dice2.png',3:'images/dice3.png',4:'images/dice4.png',5:'images/dice5.png',
6:'images/dice6.png'};
document.querySelector('img.img1').setAttribute('src',dict[rand1]);

document.querySelector('img.img2').setAttribute('src',dict[rand2]);
if(rand1==rand2){
    document.querySelector('h1.heading').textContent='It\'s a draw ';
}
else if (rand1>rand2){
    document.querySelector('h1.heading').textContent='Player 1 win! ';
}
else{
    document.querySelector('h1.heading').textContent='Player 2 win! ';
}
}
onload=randomNumber();