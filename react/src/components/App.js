import React from 'react';
import Header from './Header';
import Catalog from './Catalog';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return(
      <div>
        <Header />
        <Catalog />
      </div>
      );
  };
};

export default App;
