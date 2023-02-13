import { alpha_board_theme } from '../main';
import { AlphaTheme } from '../themes';

test('Test board theme', () => {
  expect(alpha_board_theme[0]).toBe(AlphaTheme.board.white);
  expect(alpha_board_theme[1]).toBe(AlphaTheme.board.black);
});