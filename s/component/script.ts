const click = document.querySelector('.click');
const value = document.querySelector('.value');
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '../../x/component/style.css.js';
import { App } from '../../x/state/state.js';
import { query } from 'lit/decorators/query.js';
@customElement('todo-list')
export class ToDoList extends LitElement {
  currTarget = '';
  currValue = '';
  static styles = style;
  #remove(e) {
    this.requestUpdate();

    const index = e.target.id;
    App.state.list.splice(index, 1);
  }
  #checked(e) {
    this.requestUpdate();
    const index = e.target?.querySelector('button')?.id;
    // e.target.style.backgroundColor = 'gray';
    this.currTarget = index;
    this.currValue = App.state.list[this.currTarget];
    App.state.checked.splice(index, 1, true);
    // App.state.list.splice(index, 1);
    console.log(App.state.checked);
  }
  #list() {
    const input = this.shadowRoot.querySelector('.input') as HTMLInputElement;
    const value = this.shadowRoot.querySelector('.value');

    if (input.value !== '') {
      App.state.checked.push(false);
      App.state.add(input.value);
    }
    console.log(App.state.checked);
    this.requestUpdate();
  }

  #renderList() {
    this.requestUpdate();
    let index = -1;

    return App.state.list.map((e) => {
      return html` <li @click="${(e) => this.#checked(e)}">
        <span>${e}</span>
        <button
          id="${(index = index + 1)}"
          @click="${(e) => this.#remove(e)}"
          class="remove"
        >
          &#10006;
        </button>
      </li>`;
    });
  }
  render() {
    return html`
      <div class="container">
        <h1>Todos</h1>
        <div class="center">
          <div>
            <input class="input" />
            <button @click="${() => this.#list()}">Add</button>
          </div>
          <ol>
            ${this.#renderList()}
          </ol>
        </div>
      </div>
    `;
  }
}
