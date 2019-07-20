import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Welcome from './components/Welcome';

ReactDOM.render(
  <Welcome text='Hello there' />,
  document.getElementById('root') as HTMLElement
);