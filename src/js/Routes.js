import Main from './Main';
import IndexView from './components/IndexView';
import Users from './components/Users';
import Contractors from './components/Contractors';
import Orders from './components/Orders';
import NotFound from './components/NotFound';
import Status from './components/Status';


export default {
  path: '/',
  component: Main,
  indexRoute: { component: IndexView },
  childRoutes: [
    { path: 'users', component: Users },
    { path: 'contractors', component: Contractors },
    { path: 'orders', component: Orders },
    { path: 'status', component: Status },

    { path: '*', component: NotFound }

  ]
};
