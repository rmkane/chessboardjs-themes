import {
  BISHOP, BLACK, KING, KNIGHT, PAWN, QUEEN, ROOK, WHITE, Color, Rank,
} from '../constants';

test('Test colors', () => {
  expect(Color.BLACK).toBe(BLACK);
  expect(Color.WHITE).toBe(WHITE);
});

test('Test ranks', () => {
  expect(Rank.KING).toBe(KING);
  expect(Rank.QUEEN).toBe(QUEEN);
  expect(Rank.ROOK).toBe(ROOK);
  expect(Rank.BISHOP).toBe(BISHOP);
  expect(Rank.KNIGHT).toBe(KNIGHT);
  expect(Rank.PAWN).toBe(PAWN);
});
