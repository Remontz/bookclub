import React from 'react'
import ChessGame from '../components/GameComponents/ChessGame/ChessGame'
import Chess from '../components/GameComponents/Chess'
import Checkers from '../components/GameComponents/Checkers'
import TicTacToe from '../components/GameComponents/TicTacToe'
import WordGolgi from '../components/GameComponents/WordGolgi'
import Uno from '../components/GameComponents/Uno'
import Phase10 from '../components/GameComponents/Phase10'
import Spades from '../components/GameComponents/Spades'


const GameLounge = () => {
  return (
    <div>
        <ChessGame />
    </div>
  )
}

export default GameLounge