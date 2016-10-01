import React, { Component } from 'react';
import Spell from './Spell';

class Level extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let spells = this.props.spells.map(spell => {
      return(
        <Spell
          key={spell.id}
          name={spell.name}
        />)
    });
    return (
      <div>
        <h3>Level {this.props.level}</h3>
        <ul>
          {spells}
        </ul>
      </div>
    );
  }
}

export default Level;
