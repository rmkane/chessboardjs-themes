/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import {
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
} from './app/main';
import { Piece } from './app/types';

declare global {
    interface Window {
        alpha_piece_theme: (piece: Piece)=> string,
        chess24_piece_theme: (piece: Piece)=> string,
        dilena_piece_theme: (piece: Piece)=> string,
        leipzig_piece_theme: (piece: Piece)=> string,
        metro_piece_theme: (piece: Piece)=> string,
        symbol_piece_theme: (piece: Piece)=> string,
        uscf_piece_theme: (piece: Piece)=> string,
        wikipedia_piece_theme: (piece: Piece)=> string,
        alpha_board_theme: string[],
        chess24_board_theme: string[],
        dilena_board_theme: string[],
        leipzig_board_theme: string[],
        metro_board_theme: string[],
        symbol_board_theme: string[],
        uscf_board_theme: string[],
        wikipedia_board_theme: string[],
    }
}

window.alpha_piece_theme = alpha_piece_theme;
window.chess24_piece_theme = chess24_piece_theme;
window.dilena_piece_theme = dilena_piece_theme;
window.leipzig_piece_theme = leipzig_piece_theme;
window.metro_piece_theme = metro_piece_theme;
window.symbol_piece_theme = symbol_piece_theme;
window.uscf_piece_theme = uscf_piece_theme;
window.wikipedia_piece_theme = wikipedia_piece_theme;

window.alpha_board_theme = alpha_board_theme;
window.chess24_board_theme = chess24_board_theme;
window.metro_board_theme = metro_board_theme;
window.leipzig_board_theme = leipzig_board_theme;
window.wikipedia_board_theme = wikipedia_board_theme;
window.dilena_board_theme = dilena_board_theme;
window.uscf_board_theme = uscf_board_theme;
window.symbol_board_theme = symbol_board_theme;
