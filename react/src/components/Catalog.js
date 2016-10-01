import React, { Component } from 'react';
import Level from './Level';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { levels: [{level: 0, spells: []}] }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/v1/spells',
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ levels: data.levels });
    });
  }

  render() {
    let levels = this.state.levels.map(level => {
      return(
        <Level
          key={level.level}
          level={level.level}
          spells={level.spells}
        />)
    });
    return (
      <div>
        {levels}
      </div>
    );
  }
}

export default Catalog;
