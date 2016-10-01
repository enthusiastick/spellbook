import React, { Component } from 'react';
import Spell from './Spell';

class Level extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { chosenSpells: [] }
  }

  handleClick(id) {
    let spellsChosen = this.state.chosenSpells;
    spellsChosen.push(id);
    this.setState({ chosenSpells: spellsChosen})
  }

  render() {
    let spells = this.props.spells.map(spell => {

      let onClick = () => {
        this.handleClick(spell.id);
      }

      if (this.state.chosenSpells.includes(spell.id)) {
        return(null)
      } else {
        return(
        <Spell
          key={spell.id}
          name={spell.name}
          url={spell.url}
          onClick={onClick}
        />)
      }

    });
    let spellbook = this.props.spells.map(spell => {

      let onClick = () => {
        this.handleClick(spell.id);
      }

      if (this.state.chosenSpells.includes(spell.id)) {
        return(
        <Spell
          key={spell.id}
          name={spell.name}
          onClick={onClick}
        />)
      } else {
        return(null)
      }

    });
    return (
      <div className="callout">
        <h3 className="text-center">Level {this.props.level}</h3>
        <div className="row">
          <div className="small-6 columns">
            <h4>Available</h4>
            <ul>
              {spells}
            </ul>
          </div>
          <div className="small-6 columns">
            <h4>Selected</h4>
            <ul>
              {spellbook}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Level;
