type Asset = {
  id?: string;
  w?: number;
  h?: number;
  u?: string;
  p?: string;
  e?: number;
  layers?: Layer[];
};

export type Layer = {
  ddd: number;
  ind: number;
  ty: number;
  nm: string;
  sr: number;
  ks: Transform;
  ao?: number;
  shapes?: Shape[];
  ip: number;
  op: number;
  st: number;
  ct?: number;
  bm: number;
};

type Transform = {
  o: Property;
  r: Property;
  p: Property;
  a: Property;
  s: AnimatedProperty;
  ix?: number;
  l?: number;
};

type Property = {
  a: number;
  k: any;
  ix: number;
};

type AnimatedProperty = {
  a: number;
  k: Keyframe[];
  ix: number;
  l?: number;
};

type Keyframe = {
  i: Easing;
  o: Easing;
  t: number;
  s: number[];
};

type Easing = {
  x: number[];
  y: number[];
};

export type Shape = {
  ty: string;
  it?: ShapeItem[];
  nm: string;
  np: number;
  cix: number;
  bm: number;
  ix: number;
  mn: string;
  hd: boolean;
};

type Color = {
  a: number;
  k: number[]; // RGBA values
  ix: number;
};

export type ShapeItem = {
  ind: number;
  ty: string;
  ix: number;
  ks?: ShapeProperty;
  c?: Color; // Color property
  nm: string;
  mn: string;
  hd: boolean;
};

type ShapeProperty = {
  a: number;
  k: ShapeKeyframe;
  ix: number;
};

type ShapeKeyframe = {
  i: number[][];
  o: number[][];
  v: number[][];
  c: boolean;
};

export type LottieAnimation = {
  v: string;
  fr: number; // Frame Rate
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Asset[];
  layers: Layer[];
};
