import './index.css';

export function createHelloWorld(): Node {
  return document.createTextNode('Hello world!');
}

document.addEventListener('DOMContentLoaded', () => {
  // tslint:disable-next-line:no-console we want to show that the code run.
  console.log('Document loaded');
  const root: HTMLDivElement = document.createElement('div');
  root.appendChild(createHelloWorld());

  document.body.appendChild(root);
});
