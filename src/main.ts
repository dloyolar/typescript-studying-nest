import { charmander } from './bases/03-classes';
import './style.css';
// import { name, age } from './bases/01-types';

console.log(charmander);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name}</h1>
  </div>
`;
