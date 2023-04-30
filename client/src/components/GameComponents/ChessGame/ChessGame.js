import React, {useReducer} from 'react'
import Board from './components/Board/Board'
import '../Styles/chessGame.css'
import { initGameState } from './constant'
import AppContext from './contexts/Context'
import { reducer } from './reducer/reducer'

const ChessGame = () => {

    const [appState, dispatch] = useReducer(reducer,initGameState)

    const providerState = {
        appState,
        dispatch
    }
  return (
    <AppContext.Provider value={providerState} >
        <div className='chessApp'>
            <Board />
        </div>
    </AppContext.Provider>
  )
}

export default ChessGame