const board = document.querySelector('#gameBoard');
const c = board.getContext('2d');

board.width = board.clientWidth;
board.height = board.clientHeight;

let frames=0;

for (let i=0; i<8; i++){
    c.fillRect((board.width-196)/8*i-1+98, 0, (board.width-196)/8+1, 100); 
    c.clearRect((board.width-196)/8*i+1+98, 1, (board.width-196)/8-3, 96);
}
for (let i=0; i<8; i++){
    c.fillRect((board.width-200)/8*i-1+100, board.height-100, (board.width-200)/8+1, 100); 
    c.clearRect((board.width-200)/8*i+1+100, board.height-98, (board.width-200)/8-3, 96);
}
for (let i=0; i<=7; i++){
    c.fillRect(0, (board.height-200)/8*i-1+100, 100 , (board.height-200)/8+1); 
    c.clearRect(1, (board.height-200)/8*i-1+2+100, 96 , (board.height-200)/8-3);
}

for (let i=0; i<=7; i++){
    c.fillRect(board.width-100, (board.height-200)/8*i-1+100, 100 , (board.height-200)/8+1); 
    c.clearRect(board.width-96, (board.height-200)/8*i-1+2+100, 95 , (board.height-200)/8-3);
}

//coin haut gauche
c.fillRect(0,0,100,100); 
c.clearRect(1,1,96,96);
//coin haut droite
c.fillRect(board.width-100,0,100,100); 
c.clearRect(board.width-96,1,95,96);
//coin bas gauche
c.fillRect(0,board.height-100,100,100); 
c.clearRect(1,board.height-98,96,96);
//coin bas droite
c.fillRect(board.width-100,board.height-100,100,100); 
c.clearRect(board.width-98,board.height-98,96,96);

