class Personaje {
    constructor(name,health,image){
        this.name = name;
        this.health = health;
        this.image = image;
        this.atack = function(){
           console.log('hit');
        };
    }
}
let finished = 0;
const hero = new Personaje('Dino',120,'trex.gif');
const enemy = new Personaje('Mammoth',120,'mammoth.gif');

hero.atack = function(){
    if(enemy.health > 0){
        enemy.health = enemy.health-10;
        if(enemy.health%20 == 0) document.getElementById('mammothHealth').src = enemy.health/20 + '.png';
        console.log('enemy: ' + enemy.health);
    }
    if(enemy.health == 0) {
        finished = 1;
        end();
    }


}

enemy.atack = function(){
    if(hero.health > 0){
        hero.health = hero.health-10;
        if(hero.health%20 == 0) document.getElementById('dinoHealth').src = hero.health/20 + '.png';
        console.log('hero: ' + hero.health);
    }
    if(enemy.health == 0) {
        finished = 1;
        end();
    }    


}

function end(){
if(finished) document.getElementById('gameOver').src = 'gameover.png';
}

