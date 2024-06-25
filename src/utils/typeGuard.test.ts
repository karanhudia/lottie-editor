import { isLottieAnimation } from './typeGuard';
import { mockLottieAnimation } from '../test/mocks/mockLottieAnimation';

const invalidAnimation: any = {
  assets: {},
  layers: [],
  op: 'not-a-number', // Invalid op property
  fr: 60,
  ip: 0,
  ddd: 'not-a-number', // Invalid ddd property
};

describe('isLottieAnimation', () => {
  it('should return true for a valid LottieAnimation object', () => {
    expect(isLottieAnimation(mockLottieAnimation)).toBe(true);
  });

  it('should return false for an invalid LottieAnimation object', () => {
    expect(isLottieAnimation(invalidAnimation)).toBe(false);
  });

  it('should return false for non-object input', () => {
    expect(isLottieAnimation(null)).toBe(false);
    expect(isLottieAnimation(undefined)).toBe(false);
    expect(isLottieAnimation(42)).toBe(false);
    expect(isLottieAnimation('string')).toBe(false);
    expect(isLottieAnimation(true)).toBe(false);
    expect(isLottieAnimation([])).toBe(false);
  });

  it('should return false for missing required properties', () => {
    expect(isLottieAnimation({})).toBe(false); // Missing all required properties
    expect(isLottieAnimation({ op: 'test' })).toBe(false); // Missing other required properties
  });
});
