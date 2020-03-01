import { createContext } from 'react'

interface ChessContext {
  picking: {
    chessman: Chess.Chessman
    source: Chess.Coordinates
  } | undefined | null
  targets: Chess.Coordinates[] | undefined | null

  pickChessman(chessman: Chess.Chessman, source: Chess.Coordinates): void
}

export default createContext<ChessContext>({
  picking: null,
  targets: null,

  pickChessman() {
    throw new Error // TODO
  },
})
