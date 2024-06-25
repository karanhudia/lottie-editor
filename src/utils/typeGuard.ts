import { LottieAnimation } from '../graphql/lottie-server/generated';

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

export const isLottieAnimation = (obj: unknown): obj is LottieAnimation => {
  return (
    isObject(obj) &&
    typeof obj.assets === 'object' &&
    Array.isArray(obj.layers) &&
    typeof obj.op === 'number' &&
    typeof obj.fr === 'number' &&
    typeof obj.ip === 'number' &&
    typeof obj.ddd === 'number' &&
    (typeof obj.w === 'undefined' || typeof obj.w === 'number') &&
    (typeof obj.h === 'undefined' || typeof obj.h === 'number') &&
    (typeof obj.v === 'undefined' || typeof obj.v === 'string') &&
    (typeof obj.nm === 'undefined' || typeof obj.nm === 'string')
  );
};
