import React, { Component } from "react";
import "./TodoApp.css";
class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  StorageItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allItems = this.state.items;
    allItems.push(input);
    this.setState({
      items: allItems,
      input: "", //this is used for disappear the entered text in the input box after click the enter button
    });
  };

  deleteItems = (key) => {
    const allItems = this.state.items;
    allItems.splice(key, 1);
    this.setState({
      items: allItems,
    });
  };
  render() {
    // study destructuring important concept. [debug media youtube channel => todo app => part 2 => 2.20(Time)]
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.StorageItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            value={input} //using destructuring method.
            onChange={this.handleChange}
            placeholder="Enter your Tasks"
          />
        </form>

        <ul>


  

          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <i
                className="fa-solid fa-trash-can"
                onClick={() => this.deleteItems(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;

// study spread operator in javascript
