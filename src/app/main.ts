import { Piece } from './types';

import {
  AlphaTheme,
  Chess24Theme,
  DilenaTheme,
  LeipzigTheme,
  MetroTheme,
  SymbolTheme,
  UscfTheme,
  WikipediaTheme,
} from './themes';

const alpha_piece_theme = (piece: Piece): string => AlphaTheme.icons[piece][0];
const chess24_piece_theme = (piece: Piece): string => Chess24Theme.icons[piece][0];
const dilena_piece_theme = (piece: Piece): string => DilenaTheme.icons[piece][0];
const leipzig_piece_theme = (piece: Piece): string => LeipzigTheme.icons[piece][0];
const metro_piece_theme = (piece: Piece): string => MetroTheme.icons[piece][0];
const symbol_piece_theme = (piece: Piece): string => SymbolTheme.icons[piece][0];
const uscf_piece_theme = (piece: Piece): string => UscfTheme.icons[piece][0];
const wikipedia_piece_theme = (piece: Piece): string => WikipediaTheme.icons[piece][0];

const alpha_board_theme: string[] = [AlphaTheme.board.white, AlphaTheme.board.black];
const chess24_board_theme: string[] = [Chess24Theme.board.white, Chess24Theme.board.black];
const dilena_board_theme: string[] = [DilenaTheme.board.white, DilenaTheme.board.black];
const leipzig_board_theme: string[] = [LeipzigTheme.board.white, LeipzigTheme.board.black];
const metro_board_theme: string[] = [MetroTheme.board.white, MetroTheme.board.black];
const symbol_board_theme: string[] = [SymbolTheme.board.white, SymbolTheme.board.black];
const uscf_board_theme: string[] = [UscfTheme.board.white, UscfTheme.board.black];
const wikipedia_board_theme: string[] = [WikipediaTheme.board.white, WikipediaTheme.board.black];

export {
  alpha_piece_theme,
  chess24_piece_theme,
  dilena_piece_theme,
  leipzig_piece_theme,
  metro_piece_theme,
  symbol_piece_theme,
  uscf_piece_theme,
  wikipedia_piece_theme,
  alpha_board_theme,
  chess24_board_theme,
  dilena_board_theme,
  leipzig_board_theme,
  metro_board_theme,
  symbol_board_theme,
  uscf_board_theme,
  wikipedia_board_theme,
};



