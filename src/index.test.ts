import * as unit from './index';

describe('exec', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-06-01'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('should work as expected', async () => {
    await expect(unit.exec()).resolves.toContain('Tomorrow in Helsinki it is: AD 2022-Jun-02 Thursday');
  });
});
