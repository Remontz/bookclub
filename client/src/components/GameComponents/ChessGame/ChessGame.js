import React from 'react'
import Board from './components/Board/Board'
import '../Styles/chessGame.css'

const ChessGame = () => {
  return (
    <div className='chessApp'>
        <Board />
    </div>
  )
}

export default ChessGame