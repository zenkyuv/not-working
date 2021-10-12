export const App = {
  state: {
    list: [],
    checked: [],
    add: (value: string) => {
      App.state.list.push(value);
    },
  },
};
