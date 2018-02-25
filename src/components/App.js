import React from 'react';
import PropTypes from 'prop-types';

import '../assets/stylesheets/base.scss';
import { Button } from 'react-shapebase';

const App = () => {
  return (
    <div>
      <h1>Welcome to React Shapebase Boilerplate</h1>
			<h2>Button example</h2>
			<Button>Button</Button>
    </div>
  );
};

export default App;
