// import { charmander } from './bases/03-classes';
// import { name, age } from './bases/01-types';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators2';

import './style.css';

console.log(charmander);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name}</h1>
  </div>
`;
