// VARIABLES
const canvas = document.querySelector('#game');
// Specify context 2d for canvas
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;



// EVENTS
// Once the page loads, run startGame()
window.addEventListener('load', setCanvasSize)
// in order to reaize the canva whenever there's a resize event on the navegator
window.addEventListener('resize', setCanvasSize)

function startGame(){
    // Defining the size of the element beacuse the gamemap is 10x10
    elementsSize = canvasSize / 10;
    // get ElementSize and convertet into px 
    game.font = elementsSize + 'px Verdana';
    // In order to draw the emojis at the beggining
    game.textAlign = 'end';


    const map = maps[0];


    // '.Split' breaks down a long string into an array of words.
    // We're using the dilimiter (\n) so that .split can SPLIT every time it finds \n and make new arrays after it
    // .trim() removes the initial and final spaces on an string
    const mapRows = map.trim().split('\n');
    
    // After separating the array in rows, now separete mapRows for each element
    // in order to have columns in which each character is an individual element.
                        // roww array will be saving more arrays in order to pass the function .trim and .split
    const mapRowColmns = mapRows.map(row => row.trim().split(''));
    
    // We can access now to each element through:
    // mapRowColmns[0][2]
    // Now we have access to each of those and we're able to fill the map with the emojis

    // In order to draw it 10 times

    // Instead of the for creation cicle, we're doing another array
        // SO, for each ARRAY we'll push a piece of code 
                                // for each row
    mapRowColmns.forEach(row => {
        // for each col inside row array
        row.forEach(col =>{
            const emoji = (emojis[col]);
            game.fillText(emoji, x, y);
        });
    });

    // for(let row= 1; row <= 10; row++){
    //         for (let col = 1; col <= 10; col++) {
    //         // Insert an emoji through picking an Array Element
    //                                          // Draw in the X & Y plane by multipliying for col & row
    //     game.fillText(emojis[mapRowColmns[row-1][col-1]], elementsSize * col, elementsSize *row );
    //     }


    // }
    
    // Code alternative


    
}


function setCanvasSize(){
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

    // Once the canva size is created, it will reDRAW the array.elements again
    startGame();
}