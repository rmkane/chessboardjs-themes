interface Board {
    white: string,
    black: string
}

interface Icons {
    bB: string[],
    bK: string[],
    bN: string[],
    bP: string[]
    bQ: string[],
    bR: string[],
    wB: string[],
    wK: string[],
    wN: string[],
    wP: string[]
    wQ: string[],
    wR: string[],
}

interface Theme {
    name: string,
    board: Board
    icons: Icons,
}

type Piece = 'bB' | 'bK' | 'bN' | 'bP' | 'bQ' | 'bR' | 'wB' | 'wK' | 'wN' | 'wP' | 'wQ' | 'wR';

export {
  Board, Icons, Piece, Theme,
};

