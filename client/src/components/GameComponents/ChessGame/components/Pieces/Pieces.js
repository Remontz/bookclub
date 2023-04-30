import React, {useState, useRef} from 'react'
import './Pieces.css'
import Piece from './Piece'
import { createPosition, copyPosition } from '../../helper'
import { useAppContext } from '../../contexts/Context'
import { clearCandidates, makeNewMove } from '../../reducer/actions/move'


const Pieces = () => {

    const ref = useRef()

    const {appState, dispatch} = useAppContext()

    const currentPosition = appState.position[appState.position.length-1]

    const calcCoords = e => {
        const {top,left,width} = ref.current.getBoundingClientRect()
        const size = width /8
        const y = Math.floor((e.clientX - left) / size)
        const x = 7 - Math.floor((e.clientY - top) / size)
        return {x, y}
    }

    const onDrop = e => {
        const newPosition = copyPosition(currentPosition)
        const {x, y} = calcCoords(e)

        const [piece,rank,file] = e.dataTransfer.getData('text/plain').split(',')
        if(appState.candidateMoves?.find(m => m[0] === x && m[1] === y)){
            newPosition[Number(rank)][Number(file)] = ''
            newPosition[x][y] = piece
            dispatch(makeNewMove({newPosition}))
        }

        dispatch(clearCandidates())


    }
    const onDragOver = e => e.preventDefault();

  return (
    <div 
    ref = {ref}
    onDrop = {onDrop}
    onDragOver = {onDragOver}
    className='pieces'>
        {currentPosition.map((r, rank) => 
            r.map((f,file) => 
                currentPosition[rank][file] 
                ?  <Piece
                        key={rank+'-'+file}
                        rank={rank}
                        file={file}
                        piece={currentPosition[rank][file]}
                        />
                : null
        ))}
    </div>
  )
}

export default Pieces