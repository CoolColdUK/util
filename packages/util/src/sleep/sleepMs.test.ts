import {randomNumberRange} from '../number/randomNumberRange';
import {sleepMs} from './sleepMs';

// Mock the setTimeout function
jest.useFakeTimers();

const spyRandom = jest.mocked(randomNumberRange);
const spySetTimeout = jest.spyOn(global, 'setTimeout');

describe('sleepMs', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counters before each test
    jest.clearAllTimers(); // Reset timers before each test
  });

  it('should resolve after the specified milliseconds when upperMs is not provided', async () => {
    const ms = 1000; // Example milliseconds

    const promise = sleepMs(ms);
    jest.advanceTimersByTime(ms); // Advance timers by ms milliseconds

    await promise;

    expect(spyRandom).not.toHaveBeenCalled();
    expect(spySetTimeout).toHaveBeenCalledTimes(1);
    expect(spySetTimeout).toHaveBeenCalledWith(expect.any(Function), ms);
  });

  it('should resolve after a random milliseconds between ms and upperMs when upperMs is provided', async () => {
    const ms = 1000; // Example milliseconds
    const upperMs = 2000; // Example upper milliseconds
    const randomValue = 1500;

    // Mock the random function to return a value between ms and upperMs
    spyRandom.mockReturnValue(randomValue);

    const promise = sleepMs(ms, upperMs);
    jest.advanceTimersByTime(randomValue); // Advance timers by the mocked random value

    await promise;

    expect(spyRandom).toHaveBeenCalledTimes(1);
    expect(spyRandom).toHaveBeenCalledWith(ms, upperMs, true);
    expect(spySetTimeout).toHaveBeenCalledTimes(1);
    expect(spySetTimeout).toHaveBeenCalledWith(expect.any(Function), randomValue);
  });
});
