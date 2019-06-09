// @ts-nocheck
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './store';
import { register } from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

register();
