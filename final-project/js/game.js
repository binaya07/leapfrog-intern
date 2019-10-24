
class Game{
    constructor(){
        this.boardContainer = document.getElementsByClassName('board')[0];

        this.boardContainer.onclick = this.checkClick;
    }

    addBoard(boardArray){
        for(var i = RANKS.RANK_1; i <= RANKS.RANK_8; i++ ){

            var row = document.createElement('div');
            var rank = 8 - i;
            var rankId = 'rank-' + rank;
            row.classList.add('rank-row');
            row.setAttribute('id', rankId);
                        
            this.boardContainer.appendChild(row);

            for(var j = FILES.FILE_A; j <= FILES.FILE_H; j++){

                var col = document.createElement('div');
                col.classList.add('square');
                var fileId = FILE_REPR[j] + rank;
                col.setAttribute('id', fileId);

                if((i+j) % 2 == 0){
                    col.classList.add('light-square');
                }
                else{
                    col.classList.add('dark-square');
                }

                row.appendChild(col);
                
                if(j == 0){
                    var rankInfo = document.createElement('span');
                    rankInfo.classList.add('rank-info');
                    rankInfo.innerHTML = rank;

                    col.appendChild(rankInfo);
                }

                if(i == RANKS.RANK_8){
                    var fileInfo = document.createElement('span');
                    fileInfo.classList.add('file-info');
                    fileInfo.innerHTML = FILE_REPR[j];

                    col.appendChild(fileInfo);                
                }

                var boardIndex = i * 8 + j;
                
                switch(boardArray[boardIndex]){
                    case PIECES.b_p:
                        var img = this.addPiece('black', 'pawn', 'images/bP.png');
                        col.appendChild(img); 
                        break;

                    case PIECES.w_p:
                        var img = this.addPiece('white', 'pawn', 'images/wP.png');
                        col.appendChild(img); 
                        break;

                    case PIECES.b_r:
                        var img = this.addPiece('black', 'rook', 'images/bR.png');
                        col.appendChild(img); 
                        break;

                    case PIECES.w_r:
                        var img = this.addPiece('white', 'rook', 'images/wR.png');
                        col.appendChild(img); 
                        break;

                    case PIECES.b_b:
                        var img = this.addPiece('black', 'bishop', 'images/bB.png');
                        col.appendChild(img); 
                        break;

                            
                    case PIECES.w_b:
                        var img = this.addPiece('white', 'bishop', 'images/wB.png');
                        col.appendChild(img); 
                        break;
                    
                    case PIECES.b_n:                        
                        var img = this.addPiece('black', 'knight', 'images/bN.png');
                        col.appendChild(img); 
                        break;
                    
                    case PIECES.w_n:
                        var img = this.addPiece('white', 'knight', 'images/wn.png');
                        col.appendChild(img); 
                        break;
                
                    case PIECES.b_q:
                        var img = this.addPiece('black', 'queen', 'images/bQ.png');
                        col.appendChild(img); 
                        break;
                            
                    case PIECES.w_q:
                        var img = this.addPiece('white', 'queen', 'images/wQ.png');
                        col.appendChild(img); 
                        break;

                    case PIECES.b_k:
                        var img = this.addPiece('black', 'king', 'images/bK.png');
                        col.appendChild(img); 
                        break;
                            
                    case PIECES.w_k:
                        var img = this.addPiece('white', 'king', 'images/wK.png');
                        col.appendChild(img); 
                        break;
        
                    default: break;
                }
            }
        }
    }

    addPiece(class1, class2, imgSrc){
        var img = document.createElement('img');
        
        img.classList.add(class1);
        img.classList.add(class2);
        img.setAttribute('src', imgSrc);
        img.style.width = 'inherit';
        img.style.height = 'inherit';
        img.style.paddingBottom ='5px';
        img.style.paddingRight = '5px';
        
        return img;
    }

    removeBoard(){
        this.boardContainer.innerHTML = "";
    }

    checkClick(e){

        var el = e.target;
        
        console.log(el.getAttribute('class'));
    }
}