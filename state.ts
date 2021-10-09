import { LitElement, html } from 'lit-element';

export const App = {
  state: {
    count: 0,
    list: [],
    increment: () => {
      App.state.count++;
      console.log(App.state.count);
    },
    add: (e) => {
      App.state.list.push(e);
    },
    renderContainer: () => {},
  },
};
