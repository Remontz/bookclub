import {React, useState} from 'react'
import './Styles/chess.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Construct Chessboard -- An array of 8 rows and 8 columns [[1, 2, 3, 4, 5, 6, 7, 8][1, 2, 3....]]
// Make Object of pieces with properties: movement & img
// will need to count number of turns
// turn state & win state

const chessBoard = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7]
]


const movePiece = event => {
    let piecePosition = event.currentTarget.className.toString()
    console.log(piecePosition)
    // remove numbers from the piecePositionString
    let currentPiece = ''
    for(let i = 0; i < piecePosition.length; i++) {
        if(isNaN(piecePosition[i])) {
            if(piecePosition[i] !== '-') {currentPiece += piecePosition[i]} 
        } 
    }
    console.log(currentPiece)
    let currentRank = piecePosition[piecePosition.length-3]
    let currentIndex = piecePosition[piecePosition.length-1]
    console.log(`currentRank: ${currentRank} | currentIndex: ${currentIndex}`)
    // may movePieceGld & movePieceYlw
    // create new string that takes 'gld-square and numbers from piecePositionString
    let availableSpaces = []
    if(currentPiece === 'pawn') {
        let topAvailable = document.getElementsByClassName(`gld-square ${currentRank+1}-${currentIndex}`)
        topAvailable.classList.add('blue-square')
    }
    // add movement to picepositionnumbers for new square
    // highlight possible moves, toggle state for moving, not moving
    // use new string to access className gld-square + piece position numbers
    // delete icon from old div, get & change element of new div
}

const generateBoard = () => {
    const play = chessBoard.map((file, rank) => {
        return (
            <div className='rank' id={rank}>
                {file.map((square, index) => {
                    if(rank%2===0) {
                        return index%2 === 0 ? 
                            <div className = { `gld-square ${rank}-${index}` }>
                                {rank === 0 ? 
                                    index === 0 ? <p id={whtRook.color}>{whtRook.icon}</p>  :
                                    index === 2 ? <p id={whtKnight.color}>{whtKnight.icon}</p> :
                                    index === 4 ? <p id={whtQueen.color}>{whtQueen.icon}</p> :
                                        <p id={whtBishop.color}>{whtBishop.icon}</p> : 
                                    rank === 6 ?  <p id={blkPawn.color} className={`pawn ${rank}-${index}`} onClick={movePiece}>{blkPawn.icon}</p> : 
                                    <p></p>
                                }
                            </div> 
                            : <div className = { `ylw-square ${rank}-${index}` }>
                                {rank === 0 ? 
                                    index === 1 ? <p id={whtBishop.color}>{whtBishop.icon}</p>  :
                                    index === 3 ? <p id={whtKing.color}>{whtKing.icon}</p> :
                                    index === 5 ? <p id={whtKnight.color}>{whtKnight.icon}</p> :
                                        <p id={whtRook.color}>{whtRook.icon}</p> : 
                                    rank === 6 ?  <p id={blkPawn.color} className='pawn' onClick={movePiece}>{blkPawn.icon}</p> : 
                                    <p></p>
                                }
                            </div>
                    } else {
                        return index%2 === 0 ? 
                            <div className = { `ylw-square ${rank}-${index}` }>
                                {rank === 1 ?
                                    <p id={whtPawn.color} className='pawn' onClick={movePiece}>{whtPawn.icon}</p> : 
                                rank === 7 ? 
                                    index === 0 ? <p>{blkRook.icon}</p>  :
                                    index === 2 ? <p>{blkKnight.icon}</p> :
                                    index === 4 ? <p>{blkQueen.icon}</p> :
                                        <p>{blkBishop.icon}</p> : <p></p>
                                }
                            </div> 
                            : <div className = { `gld-square ${rank}-${index}` }>
                                {rank === 1 ?
                                    <p id={whtPawn.color} className='pawn' onClick={movePiece}>{whtPawn.icon}</p> : 
                                rank === 7 ? 
                                    index === 1 ? <p>{blkBishop.icon}</p>  :
                                    index === 3 ? <p>{blkKing.icon}</p> :
                                    index === 5 ? <p>{blkKnight.icon}</p> :
                                        <p>{blkRook.icon}</p> : <p></p>
                                }
                            </div>
                    }
                    }
                )
            }
            </div>
            )
            })
        console.log(play)
        return play;
}

const blkKing = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-king" />,
    color: 'black',
    startingPos: [7, 3],
    currentPos: [7,3],
    // move: moveKing()
}
const whtKing = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-king" />,
    color: 'white',
    startingPos: [0, 3],
    currentPos: [0,3],
    // move: moveKing()
}

const blkQueen = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-queen" />,
    color: 'black',
    startingPos: [7, 4],
    currentPos: [7, 4],
    // move: moveQueen()
}
const whtQueen = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-queen" />,
    color: 'white',
    startingPos: [0, 4],
    currentPos: [0, 4],
    // move: moveQueen()
}

const blkBishop = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-bishop" />,
    color: 'black',
    startingPos: [[7,1], [7,6]],
    currentPos: [[7,1], [7,6]],
    // move: moveBishop()
}
const whtBishop = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-bishop" />,
    color: 'white',
    startingPos: [[0,1], [0,6]],
    currentPos: [[0,1], [0,6]],
    // move: moveBishop()
}

const blkKnight = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-knight" />,
    color: 'black',
    startingPos: [[7,2],[7,5]],
    currentPos: [[7,2],[7,5]],
    // move: moveKnight() 
}
const whtKnight = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-knight" />,
    color: 'white',
    startingPos: [[0,2],[0,5]],
    currentPos: [[0,2],[0,5]],
    // move: moveKnight() 
}

const blkRook = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-rook" />,
    color: 'black',
    startingPos: [[7,0],[7,7]],
    currentPos: [[7,0],[7,7]],
    // move: moveRook()
}
const whtRook = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-rook" />,
    color: 'white',
    startingPos: [[0,0],[0,7]],
    currentPos: [[0,0],[0,7]],
    // move: moveRook()
}


const blkPawn = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-pawn" />,
    color: 'black',
    startingPos: [[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7]],
    currentPos: [[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7]],
    // move: movePawn() 
}
const whtPawn = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-pawn" />,
    color: 'white',
    startingPos: [[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7]],
    currentPos: [[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7]],
    // move: movePawn() 
}


// const King = {
//         icon: <FontAwesomeIcon icon="fa-solid fa-chess-king" />,
//         color: 'black',
//         startingPos: [x, y],
//         moves:  {
//             left: function() {x-1},
//             right: function() {x+1},
//             top: function() {y+1},
//             bottom: function() {y-1},
//         },
//         position: [x, y]
// }


        

const Chess = () => {
    
    let game = generateBoard()
  return (
    <section className='board'>
        {game}
    </section>
  )
}

export default Chess