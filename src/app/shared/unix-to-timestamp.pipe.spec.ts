import { UnixToTimestampPipe } from './unix-to-timestamp.pipe';

describe('UnixToTimestampPipe', () => {
  it('create an instance', () => {
    const pipe = new UnixToTimestampPipe();
    expect(pipe).toBeTruthy();
  });
});
