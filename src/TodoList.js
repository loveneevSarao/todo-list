import React from 'react';
import Todo from './Todo';
import Completed from './Completed'

class TodoList extends React.Component{
  state = {
    work: "",
    newWork: [],
    done: [],
    completed: [],
  }

  updateInput = (e) => {
    this.setState({work: e.target.value})
  }

  addTodo = (e) => {
    e.preventDefault();
    this.setState(previousState => ({
      newWork: [{work: previousState.work}, ...previousState.newWork],
      work: "",
    }))
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(completed => this.setState({completed}))
  }

  incomplete = (event) => {
    this.setState(previousState => ({
      newWork: previousState.newWork.filter((i) => {
        return i !== event;
      })
    }))

  }

  complete = (ele) => {
    this.setState(previousState => ({
      done: [...previousState.done, {work: ele.work}],
      newWork: previousState.newWork.filter((i) => {
        return i !== ele;
      })
    }))
  }

  render = () => {
    return (
      <div className="todo-list">

        <h1>Create your Todo List here!</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" name="todos" placeholder="Enter the task" value={this.state.work} onChange={this.updateInput}/>
          <button>Add</button>
        </form>

        <div className="incomplete-todos">
          <h2>Todo</h2>
          {this.state.newWork.map((element, val) => 
            <Todo key={val} value={element.work} incomplete={() => this.incomplete(element)} complete={() => this.complete(element)}/>
          )}
        </div>

        <div className="completed-todos">
          <h2>Done</h2>
          {this.state.done.map((element, val) => 
            <Completed key={val} value={element.work} />
          )}
        </div>  
        
      </div>
    );
  }
}

export default TodoList;