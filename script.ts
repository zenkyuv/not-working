const click = document.querySelector('.click');
const value = document.querySelector('.value');
console.log(value);
// let liczba = 0;
// value.textContent = liczba;

// const App = function _App() {
//   return `
//     <h1>Hello Vanilla JS</h1>
//     <div>Example of state management in Vanilla JS</div>
//       <h1>${_App.state.count}</h1>
//   <button id="button">Increase</button>
//   `;
// };
// document.getElementById('app').innerHTML = App();
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { App } from './state.js';
@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;
  @property()
  name = 'Somebody';
  #list() {
    const input = this.shadowRoot.querySelector('.input') as HTMLInputElement;
    const value = this.shadowRoot.querySelector('.value');
    // console.log(input.value);
    App.state.increment();
    // App.state.add(input.value);
    // console.log(App.state.list);
    // value.textContent = App.state.count.toString();
    // console.log(App.state.list.map((e) => console.log(e)));
    // console.log(
    //   App.state.list.map((e) => {
    //     return html`<li>${e}</li>`;
    //   })
    // );
    this.#renderList();
  }

  #renderList() {
    // App.state.list.map((e) => {
    //   return html`<li>${e}</li>`;
    // });
    // console.log('sraka');
    this.requestUpdate();
    return html`<div>${App.state.count}</div>`;
  }
  render() {
    console.log('e');
    return html`<p>Hello, ${this.name}!</p>
      <p class="value">${App.state.count}</p>
      <input class="input" />
      <button @click=${() => this.#list()}>get value</button>
      <div>e${this.#renderList()}</div> `;
  }
}

const arr = ['e', 'o', 'u'];
// console.log(arr.map((e) => html`<li>${e}</li>`));

// const App = function () {};
// App.state = {
//   count: 0,
//   increment: () => {
//     App.state.count++;
//     console.log(App.state.count);
//   },
// };

click.addEventListener('click', App.state.increment);
