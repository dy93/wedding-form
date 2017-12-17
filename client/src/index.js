import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './App';

import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theme from './assets/react-toolbox/theme';
import './assets/react-toolbox/theme.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
