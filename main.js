const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.gameOver');

const jump = () => {
    mario.classList.add('jump'); 

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
    
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
 
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
     
        mario.src = "img/GameOver.png";
        mario.style.width = '65px';
        mario.style.marginLeft = '60px';
        
        gameOver.style.opacity = '1';

        clearInterval(loop);
    }
}, 10); 

document.addEventListener('click', jump);