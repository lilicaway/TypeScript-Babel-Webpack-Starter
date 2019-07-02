import { createHelloWorld } from './index';

describe('createHelloWorld', () => {
  it('has the expected content', () => {
    expect(createHelloWorld().textContent).toEqual('Hello world!');
  });
});
