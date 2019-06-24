import React from 'react';

class Todo extends React.Component{
  render = () => {
    return ( 
      <>
      <ul>
        <li>
          {this.props.value}
          <div>
            <button onClick={this.props.complete}>Done</button>
            <button onClick={this.props.incomplete}>Delete</button>
          </div>
        </li>
      </ul>
      </>
    );
  }
}

export default Todo;