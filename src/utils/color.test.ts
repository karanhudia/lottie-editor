import { lottieColorToRgba, rgbaToLottieColor } from './color';

it('lottieColorToRgba', () => {
  expect(lottieColorToRgba([0.45, 0.34, 0.27, 0.5])).toStrictEqual({
    a: 0.5,
    b: 69,
    g: 87,
    r: 115,
  });
  expect(lottieColorToRgba([0.45, 0.34, 0.27])).toStrictEqual({
    a: 1,
    b: 69,
    g: 87,
    r: 115,
  });
});

it('rgbaToLottieColor', () => {
  expect(
    rgbaToLottieColor({
      a: 0.5,
      b: 69,
      g: 87,
      r: 115,
    }),
  ).toStrictEqual([0.45, 0.34, 0.27, 1]);
  expect(
    rgbaToLottieColor({
      a: 1,
      b: 69,
      g: 87,
      r: 115,
    }),
  ).toStrictEqual([0.45, 0.34, 0.27, 1]);
});
