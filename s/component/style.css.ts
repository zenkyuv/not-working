import { css } from 'lit';

export default css`
  .container {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
  }
  * {
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 25px;
  }
  ol {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  span:hover {
    text-decoration: line-through;
  }
  div {
  }
  .remove {
    background-color: rgb(252, 3, 44);
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .remove:hover {
    background-color: red;
  }
  button {
    border: none;
    border: gray 1px solid;
  }
  button:hover {
    cursor: pointer;
  }
  input {
    width: 300px;
    border: gray 1px solid;
  }
  h1 {
    text-align: center;
  }
  .center {
    display: flex;
    border: 1px solid red;
    flex-direction: column;
    align-items: center;
  }
`;
