import { RgbaColor } from 'react-colorful';

export const rgbaToLottieColor = (color: RgbaColor) => {
  return [
    parseFloat((color.r / 255).toFixed(2)),
    parseFloat((color.g / 255).toFixed(2)),
    parseFloat((color.b / 255).toFixed(2)),
    1,
  ];
};

export const lottieColorToRgba = ([r, g, b, a]: number[]): {
  r: number;
  g: number;
  b: number;
  a: number;
} => {
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a: a,
  };
};
