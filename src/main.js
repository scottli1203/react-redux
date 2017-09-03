import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/AppContainer'
import store from './stores'

let root = document.createElement('div');
document.body.appendChild(root);

render(
<Provider store={store}>
    <App />
    </Provider>,
    root
);
