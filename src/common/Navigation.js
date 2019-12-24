import React, { Component } from 'react';
import './css/Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      menu: {},
      menuNames: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(contents => this.setState(
        {menu: contents, menuNames: Object.keys(contents)}));
  }

  mapper = (name, index) => {
    return (
      <li key={index}><button
        //onClick={}
        name={name}
      >{name.toUpperCase()}</button>
      </li>
    )
  }

  render() {
    return (
      <nav>
        <ul>
          {this.state.menuNames.map(this.mapper)}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
