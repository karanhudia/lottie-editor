import { LottieAnimation } from '../graphql/lottie-server/generated';

export const isLottieAnimation = (obj: any): obj is LottieAnimation => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
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
