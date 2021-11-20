import { EmailIDPipe } from './email-id.pipe';

describe('EmailIDPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailIDPipe();
    expect(pipe).toBeTruthy();
  });
});
