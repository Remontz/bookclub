import { getKnightMoves, getRookMoves, getBishopMoves, getQueenMoves, getKingMoves, getPawnMoves, getPawnCaptures } from "./getMoves"

const arbiter = {
    getRegularMoves : function({position, piece, rank, file}) {
        if(piece.endsWith('n'))
            return getKnightMoves({position,rank,file})

        if (piece.endsWith('r'))
            return getRookMoves({position,piece,rank,file})

        if (piece.endsWith('b'))
            return getBishopMoves({position,piece,rank,file})

        if (piece.endsWith('q'))
            return getQueenMoves({position,piece,rank,file})
        
        if (piece.endsWith('k'))
            return getKingMoves({position,piece,rank,file})
        
        if (piece.endsWith('p'))
            return [
                ...getPawnMoves({position,piece,rank,file}),
                ...getPawnCaptures({position,piece,rank,file})
            ]
    }
}

export default arbiter