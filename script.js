var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SimpleGreeting_instances, _SimpleGreeting_list, _SimpleGreeting_renderList;
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
let SimpleGreeting = class SimpleGreeting extends LitElement {
    constructor() {
        super(...arguments);
        _SimpleGreeting_instances.add(this);
        this.name = 'Somebody';
    }
    render() {
        console.log('e');
        return html `<p>Hello, ${this.name}!</p>
      <p class="value">${App.state.count}</p>
      <input class="input" />
      <button @click=${() => __classPrivateFieldGet(this, _SimpleGreeting_instances, "m", _SimpleGreeting_list).call(this)}>get value</button>
      <div>e${__classPrivateFieldGet(this, _SimpleGreeting_instances, "m", _SimpleGreeting_renderList).call(this)}</div> `;
    }
};
_SimpleGreeting_instances = new WeakSet(), _SimpleGreeting_list = function _SimpleGreeting_list() {
    const input = this.shadowRoot.querySelector('.input');
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
    __classPrivateFieldGet(this, _SimpleGreeting_instances, "m", _SimpleGreeting_renderList).call(this);
}, _SimpleGreeting_renderList = function _SimpleGreeting_renderList() {
    // App.state.list.map((e) => {
    //   return html`<li>${e}</li>`;
    // });
    // console.log('sraka');
    this.requestUpdate();
    return html `<div>${App.state.count}</div>`;
};
SimpleGreeting.styles = css `
    p {
      color: blue;
    }
  `;
__decorate([
    property()
], SimpleGreeting.prototype, "name", void 0);
SimpleGreeting = __decorate([
    customElement('simple-greeting')
], SimpleGreeting);
export { SimpleGreeting };
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
//# sourceMappingURL=script.js.map