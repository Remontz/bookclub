import React, {useState, useRef} from 'react'
import './Pieces.css'
import Piece from './Piece'
import { createPosition, copyPosition } from '../../helper'


const Pieces = () => {

    const ref = useRef()

    const [state, setState] = useState(createPosition())

    const calcCoords = e => {
        const {top,left,width} = ref.current.getBoundingClientRect()
        const size = width /8
        const y = Math.floor((e.clientX - left) / size)
        const x = 7 - Math.floor((e.clientY - top) / size)
        return {x, y}
    }

    const onDrop = e => {
        const newPosition = copyPosition(state)
        const {x, y} = calcCoords(e)

        const [piece,rank,file] = e.dataTransfer.getData('text/plain').split(',')

        newPosition[rank][file] = ''
        newPosition[x][y] = piece

        setState(newPosition)
    }
    const onDragOver = e => e.preventDefault();

  return (
    <div 
    ref = {ref}
    onDrop = {onDrop}
    onDragOver = {onDragOver}
    className='pieces'>
        {state.map((r, rank) => 
            r.map((f,file) => 
                state[rank][file] 
                ?  <Piece
                        key={rank+'-'+file}
                        rank={rank}
                        file={file}
                        piece={state[rank][file]}
                        />
                : null
        ))}
    </div>
  )
}

export default Pieces