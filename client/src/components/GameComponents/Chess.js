import React from 'react'
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

const moveQueen = () => {
    console.log('move Queen function')
}
const moveKing = () => {
    console.log('move King function')
}
const moveBishop = () => {
    console.log('move Bishop function')
}
const moveKnight = () => {
    console.log('move Knight function')
}
const moveRook = () => {
    console.log('move Rook function')
}
const movePawn = () => {
    console.log('move Pawn function')
}

const generateBoard = () => {
    const play = chessBoard.map((file, rank) => {
        return (
            <div className='rank' id={rank}>
                {file.map((square, index) => {
                    if(rank%2===0) {
                        return index%2 === 0 ? 
                            <div className='gld-square'>
                                {rank === 0 ? 
                                    index === 0 ? <p id='white'>{whtRook.icon}</p>  :
                                    index === 2 ? <p id='white'>{whtKnight.icon}</p> :
                                    index === 4 ? <p id='white'>{whtQueen.icon}</p> :
                                        <p id='white'>{whtBishop.icon}</p> : null
                                }
                                {rank === 6 ?
                                    <p>{blkPawn.icon}</p> : null
                                }
                            </div> 
                            : <div className='ylw-square'>
                                {rank === 0 ? 
                                    index === 1 ? <p id='white'>{whtBishop.icon}</p>  :
                                    index === 3 ? <p id='white'>{whtKing.icon}</p> :
                                    index === 5 ? <p id='white'>{whtKnight.icon}</p> :
                                        <p id='white'>{whtRook.icon}</p> : null
                                }
                                {rank === 6 ?
                                    <p>{blkPawn.icon}</p> : null
                                }
                            </div>
                    } else {
                        return index%2 === 0 ? 
                            <div className='ylw-square'>
                                {rank === 1 ?
                                    <p id='white'>{whtPawn.icon}</p> : null
                                }
                                {rank === 7 ? 
                                    index === 0 ? <p>{blkRook.icon}</p>  :
                                    index === 2 ? <p>{blkKnight.icon}</p> :
                                    index === 4 ? <p>{blkQueen.icon}</p> :
                                        <p>{blkBishop.icon}</p> : null
                                }
                            </div> 
                            : <div className='gld-square'>
                                {rank === 1 ?
                                    <p id='white'>{whtPawn.icon}</p> : null
                                }
                                {rank === 7 ? 
                                    index === 1 ? <p>{blkBishop.icon}</p>  :
                                    index === 3 ? <p>{blkKing.icon}</p> :
                                    index === 5 ? <p>{blkKnight.icon}</p> :
                                        <p>{blkRook.icon}</p> : null
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
    move: moveKing()
}
const whtKing = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-king" />,
    color: 'black',
    startingPos: [0, 3],
    currentPos: [0,3],
    move: moveKing()
}

const blkQueen = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-queen" />,
    color: 'black',
    startingPos: [7, 4],
    currentPos: [7, 4],
    move: moveQueen()
}
const whtQueen = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-queen" />,
    color: 'black',
    startingPos: [0, 4],
    currentPos: [0, 4],
    move: moveQueen()
}

const blkBishop = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-bishop" />,
    color: 'black',
    startingPos: [[7,1], [7,6]],
    currentPos: [[7,1], [7,6]],
    move: moveBishop()
}
const whtBishop = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-bishop" />,
    color: 'black',
    startingPos: [[0,1], [0,6]],
    currentPos: [[0,1], [0,6]],
    move: moveBishop()
}

const blkKnight = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-knight" />,
    color: 'black',
    startingPos: [[7,2],[7,5]],
    currentPos: [[7,2],[7,5]],
    move: moveKnight() 
}
const whtKnight = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-knight" />,
    color: 'black',
    startingPos: [[0,2],[0,5]],
    currentPos: [[0,2],[0,5]],
    move: moveKnight() 
}

const blkRook = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-rook" />,
    color: 'black',
    startingPos: [[7,0],[7,7]],
    currentPos: [[7,0],[7,7]],
    move: moveRook()
}
const whtRook = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-rook" />,
    color: 'black',
    startingPos: [[0,0],[0,7]],
    currentPos: [[0,0],[0,7]],
    move: moveRook()
}


const blkPawn = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-pawn" />,
    color: 'black',
    startingPos: [[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7]],
    currentPos: [[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7]],
    move: movePawn() 
}
const whtPawn = {
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-pawn" />,
    color: 'white',
    startingPos: [[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7]],
    currentPos: [[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7]],
    move: movePawn() 
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
  return (
    <section className='board'>
        {generateBoard()}
    </section>
  )
}

export default Chess