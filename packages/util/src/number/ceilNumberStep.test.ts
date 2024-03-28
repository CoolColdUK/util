import {ceilNumberStep} from './ceilNumberStep'; // Import the ceilNumberStep function from your module

describe('ceilNumberStep function', () => {
  it('should correctly round the number to the nearest multiple of the step using ceiling rounding', () => {
    expect(ceilNumberStep(12, 5)).toBe(15);
    expect(ceilNumberStep(17, 5)).toBe(20);
    expect(ceilNumberStep(23, 5)).toBe(25);
    expect(ceilNumberStep(38, 10)).toBe(40);
    expect(ceilNumberStep(54, 10)).toBe(60);
  });

  it('should correctly handle negative numbers', () => {
    expect(ceilNumberStep(-12, 5)).toBe(-10);
    expect(ceilNumberStep(-17, 5)).toBe(-15);
    expect(ceilNumberStep(-23, 5)).toBe(-20);
    expect(ceilNumberStep(-38, 10)).toBe(-30);
    expect(ceilNumberStep(-54, 10)).toBe(-50);
  });

  it('should correctly round the number to the nearest multiple of the step for decimal numbers', () => {
    expect(ceilNumberStep(12.6, 5)).toBe(15);
    expect(ceilNumberStep(17.3, 5)).toBe(20);
    expect(ceilNumberStep(23.9, 5)).toBe(25);
    expect(ceilNumberStep(38.4, 10)).toBe(40);
    expect(ceilNumberStep(54.7, 10)).toBe(60);
  });

  it('should correctly handle negative decimal numbers', () => {
    expect(ceilNumberStep(-12.6, 5)).toBe(-10);
    expect(ceilNumberStep(-17.3, 5)).toBe(-15);
    expect(ceilNumberStep(-23.9, 5)).toBe(-20);
    expect(ceilNumberStep(-38.4, 10)).toBe(-30);
    expect(ceilNumberStep(-54.7, 10)).toBe(-50);
  });

  it('should return the number itself if the step is 1', () => {
    expect(ceilNumberStep(12, 1)).toBe(12);
    expect(ceilNumberStep(-17, 1)).toBe(-17);
    expect(ceilNumberStep(0, 1)).toBe(0);
    expect(ceilNumberStep(12.6, 1)).toBe(13);
    expect(ceilNumberStep(-17.3, 1)).toBe(-17);
    expect(ceilNumberStep(0.5, 1)).toBe(1);
  });

  it('should return NaN if the step is 0', () => {
    expect(ceilNumberStep(12, 0)).toBeNaN();
    expect(ceilNumberStep(-17, 0)).toBeNaN();
    expect(ceilNumberStep(0, 0)).toBeNaN();
    expect(ceilNumberStep(12.6, 0)).toBeNaN();
    expect(ceilNumberStep(-17.3, 0)).toBeNaN();
    expect(ceilNumberStep(0.5, 0)).toBeNaN();
  });
});
