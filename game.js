const canvas = document.querySelector('#game');
// Specify context 2d for canvas
const game = canvas.getContext('2d');

// Once the page loads, run startGame()
window.addEventListener('load', startGame)

function startGame()
{
//  To draw: start x,y - finish x,y
    // game.fillRect(0,50,100,100);
    
    game.font = '25px Verdana'
    game.fillStyle = 'purple';
    game.textAlign = 'right';
    game.fillText('CARLOS', 25,35);
    
}