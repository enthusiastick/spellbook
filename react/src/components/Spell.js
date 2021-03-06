import React, { Component } from 'react';

class Spell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={this.props.onClick}>
        {this.props.name}
        &nbsp;
        <a href={this.props.url} target="_blank">
          <i className="fa fa-external-link" />
        </a>
      </li>
    );
  }
}

export default Spell;
