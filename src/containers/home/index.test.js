import React from 'react';
import ReactDOM from 'react-dom';
import { HomeComponent } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeComponent
    count={1}
    increment={() => { }}
    isIncrementing={false}
    incrementAsync={() => { }}
    decrement={() => { }}
    isDecrementing={false}
    decrementAsync={() => { }}
    changePage={() => {}}
  />, div);
});
