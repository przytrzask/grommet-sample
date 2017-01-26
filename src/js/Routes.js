import Main from './Main';
import IndexView from './components/IndexView';
import Users from './components/Users';
import Contractors from './components/Contractors';
import Orders from './components/Orders';
import DigitalOrders from './components/DigitalOrders';
import NotFound from './components/NotFound';
import Status from './components/Status';
import Stats from './components/Stats';
import EditUser from './components/EditUser';


export default {
  path: '/',
  component: Main,
  indexRoute: { component: IndexView },
  childRoutes: [
    { path: 'users', component: Users },
    { path: 'contractors', component: Contractors },
    { path: 'orders', component: Orders },
    { path: 'status', component: Status },
    { path: 'stats', component: Stats },
    { path: 'digital', component: DigitalOrders },
    { path: 'users/:id', component: EditUser },

    { path: '*', component: NotFound }

  ]
};
