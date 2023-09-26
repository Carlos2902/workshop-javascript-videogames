const canvas = document.querySelector('#game');
// Specify context 2d for canvas
const game = canvas.getContext('2d');

// Once the page loads, run startGame()
window.addEventListener('load', startGame)

function startGame(){
    let canvasSize;
    // A condition in order to adjust width & height depending the ScreenSize
    
    if(window.innerHeight > innerWidth)
    {
        // Multiply for 0.8 in order to let space for the margins
        canvasSize = window.innerWidth * 0.8;
    }   else
    {
        canvasSize = innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    
    
    
    // Defining the size of the element beacuse the gamemap is 10x10
    const elementsSize = canvasSize / 10;
    // get ElementSize and convertet into px 
    game.font = elementsSize + 'px Verdana';
    // In order to draw the emojis at the beggining
    game.textAlign = 'end';


    // In order to draw it 10 times
    for (let i = 1; i <= 10; i++) {
        // Insert an emoji through picking an Array Element
        game.fillText(emojis['X'], elementsSize * i, elementsSize );
            // Assign coordenates x,y from elementSize
        
    }
    
   

    // Para hacer responsive el canva:
    // window.innerHeight
    // window.innerWidth


    //  To draw: start x,y - finish x,y
    // game.fillRect(0,50,100,100);
    
    // game.font = '25px Verdana'
    // game.fillStyle = 'purple';
    // game.textAlign = 'right';
    // game.fillText('CARLOS', 25,35);

  
    
}