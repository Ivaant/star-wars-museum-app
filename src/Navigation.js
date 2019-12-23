import React, { Component } from 'react';

class Navigation extends Component {
  constructor() {
    super();  
    this.state = {
      menu: {}
    }
  }

  componentDidMount() {
      fetch('https://swapi.co/api/')
        .then(response => response.json())
      .then(contents =>  this.setState({menu: contents}));
    }

  render() {
    return (
      <div className="App">
        {this.state.menu}/>
      </div>
    );
  }
}

export default Navigation;
