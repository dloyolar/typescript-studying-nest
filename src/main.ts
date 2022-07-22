import './style.css';
import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';
import { name, age } from './bases/01-types';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${name} ${age}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
