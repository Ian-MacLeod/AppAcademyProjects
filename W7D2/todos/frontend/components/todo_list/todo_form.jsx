import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.buildTodo = this.buildTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return (e) => this.setState({[key]: e.currentTarget.value});
  }

  buildTodo() {
    return {
      title: this.state.title,
      body: this.state.body,
      id: uniqueId()
    };
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.receiveTodo(this.buildTodo());
      this.setState({title: '', body: ''});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit()} >
        <label>
          Title
          <input type="text"
                 onChange={this.handleInput("title")}
                 value={this.state.title} />
        </label>
        <label>
          Body
          <input type="text"
                 onChange={this.handleInput("body")}
                 value={this.state.body} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;
