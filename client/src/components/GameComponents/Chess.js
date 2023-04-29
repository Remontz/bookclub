import React from 'react'


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
const fileA = chessBoard[0]
const fileB = chessBoard[1]
const fileC = chessBoard[2]
const fileD = chessBoard[3]
const fileE = chessBoard[4]
const fileF = chessBoard[5]
const fileG = chessBoard[6]
const fileH = chessBoard[7]

const Chess = () => {
  return (
    <div>
        {chessBoard.map((file, index) => {
           return (
             <div>
                {file.map((square, index) => {
                    return index%2 === 0 ? <span className='blk-square'>0</span> : <span className='wht-square'>1</span>
                })
                }
            </div>
           )
        })}
        {/* { for(let i = 0; i<chessBoard.length; i++) {
                <div>
                chessBoard[i].map(key, index) => {

                }
                </div>
            }
        } */}
    </div>
  )
}

export default Chess