
var boardElement = document.getElementById('board');

var boardData = [];

var currentPlayer = "player1";

function makeBoard()
{
    for (var row = 0; row < 3; row++)
    {
        var rowElement = document.createElement('div');
        rowElement.className = "row";

        boardData[row] = [];

        for (var column = 0; column < 3; column++)
        {
            var columnElement = document.createElement('div');
            columnElement.className ="col border boardpiece";
            columnElement.innerHTML = "Row " + row + " Column " + column;
            columnElement.id= row + "-" + column;
            columnElement.onclick = function() {
                
                var idString = this.id;
                var idArray = idString.split("-");

                if(this.innerHTML == getXPiece() || this.innerHTML == getOPiece())
                {
                    alert("You cannot change this piece");
                }
                else if(currentPlayer == 'player1')
                {
                    this.innerHTML = getXPiece();
                    currentPlayer = 'player2';
                    checkWinVertical(idArray[0],idArray[1],getXPiece());
                }
                else if (currentPlayer == 'player2')
                {
                    this.innerHTML = getOPiece();
                    currentPlayer = 'player1';
                    checkWinVertical(idArray[0],idArray[1],getOPiece());
                }
            }  
            

            boardData[row][column] = columnElement;
            rowElement.appendChild(columnElement);
        }

        boardElement.appendChild(rowElement);
    }
}

function getXPiece()
{
    return 'X';
}

function getOPiece()
{
    return 'O';
}

function checkWinVertical(row,column,piece)
{
    console.log(row);
    console.log(column);
    console.log(piece);

    var points = 0;

    if(boardData[row-1] && boardData[row-1][column] && boardData[row-1][column].innerHTML == piece)
    {
        points++;
    }

    if(boardData[row+1] && boardData[row+1][column] && boardData[row+1][column].innerHTML == piece)
    {
        points++;
    }

    if(points >= 2 )
    {
        alert("You have won!");
    }
}

makeBoard();
console.log(boardData);
boardData[0][2].innerHTML = "Crafts";
boardData[2][0].innerHTML = "Digitals";
