import React, { Component } from 'react';

class Spell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={this.props.onClick}>{this.props.name}</li>
    );
  }
}

export default Spell;
