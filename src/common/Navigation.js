import React from 'react';
import './css/Navigation.css';

const Navigation = (props) => {

  const mapper = (name, index) => {
    return (
      <li key={index}><button
        //onClick={}
        name={name}
      >{name.toUpperCase()}</button>
      </li>
    )
  }

    return (
      <nav>
        <ul>
          {props.menuNames.map(mapper)}
        </ul>
      </nav>
    )
}

export default Navigation;
