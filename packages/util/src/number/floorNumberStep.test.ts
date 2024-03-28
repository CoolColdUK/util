import {floorNumberStep} from './floorNumberStep'; // Import the floorNumberStep function from your module

describe('floorNumberStep function', () => {
  it('should correctly round the number to the nearest multiple of the step using floor rounding', () => {
    expect(floorNumberStep(12, 5)).toBe(10);
    expect(floorNumberStep(17, 5)).toBe(15);
    expect(floorNumberStep(23, 5)).toBe(20);
    expect(floorNumberStep(38, 10)).toBe(30);
    expect(floorNumberStep(54, 10)).toBe(50);
  });

  it('should correctly handle negative numbers', () => {
    expect(floorNumberStep(-12, 5)).toBe(-15);
    expect(floorNumberStep(-17, 5)).toBe(-20);
    expect(floorNumberStep(-23, 5)).toBe(-25);
    expect(floorNumberStep(-38, 10)).toBe(-40);
    expect(floorNumberStep(-54, 10)).toBe(-60);
  });

  it('should correctly round the number to the nearest multiple of the step for decimal numbers', () => {
    expect(floorNumberStep(12.6, 5)).toBe(10);
    expect(floorNumberStep(17.3, 5)).toBe(15);
    expect(floorNumberStep(23.9, 5)).toBe(20);
    expect(floorNumberStep(38.4, 10)).toBe(30);
    expect(floorNumberStep(54.7, 10)).toBe(50);
  });

  it('should correctly handle negative decimal numbers', () => {
    expect(floorNumberStep(-12.6, 5)).toBe(-15);
    expect(floorNumberStep(-17.3, 5)).toBe(-20);
    expect(floorNumberStep(-23.9, 5)).toBe(-25);
    expect(floorNumberStep(-38.4, 10)).toBe(-40);
    expect(floorNumberStep(-54.7, 10)).toBe(-60);
  });

  it('should return the number itself if the step is 1', () => {
    expect(floorNumberStep(12, 1)).toBe(12);
    expect(floorNumberStep(-17, 1)).toBe(-17);
    expect(floorNumberStep(0, 1)).toBe(0);
    expect(floorNumberStep(12.6, 1)).toBe(12);
    expect(floorNumberStep(-17.3, 1)).toBe(-18);
    expect(floorNumberStep(0.5, 1)).toBe(0);
  });

  it('should return NaN if the step is 0', () => {
    expect(floorNumberStep(12, 0)).toBeNaN();
    expect(floorNumberStep(-17, 0)).toBeNaN();
    expect(floorNumberStep(0, 0)).toBeNaN();
    expect(floorNumberStep(12.6, 0)).toBeNaN();
    expect(floorNumberStep(-17.3, 0)).toBeNaN();
    expect(floorNumberStep(0.5, 0)).toBeNaN();
  });
});
