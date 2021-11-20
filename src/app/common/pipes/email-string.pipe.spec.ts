import { EmailStringPipe } from './email-string.pipe';

describe('EmailStringPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailStringPipe();
    expect(pipe).toBeTruthy();
  });
});
