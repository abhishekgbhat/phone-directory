import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
          Phone Directory
        </div>
        <button> Add </button>
        <div>
          <span> Name </span>
          <br></br>
          <span> Phone Number </span>
        </div> */}
        <label htmlFor="name">Name: </label> 
        <input id="name" type="text" placeholder="Type Text" defaultValue="Abhishek"></input>
      </div>
    );
  }
}

export default App;
