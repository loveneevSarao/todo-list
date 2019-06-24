import React from 'react'

class Completed extends React.Component{
  render = () => {
    return (
      <div>
        <ul>
          <li>
            {this.props.value}
          </li>
        </ul>
      </div>
    );
  }
}

export default Completed;