import '../scss/index.scss';

import React  from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './Routes';
import reduxStore from './reduxStore';
import { Provider } from 'react-redux';


let element = document.getElementById('content');
ReactDOM.render(<Provider store={reduxStore}>
<Router history={browserHistory} routes={routes} />
</Provider>, element);

document.body.classList.remove('loading');
