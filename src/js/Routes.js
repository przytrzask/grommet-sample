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
import PasswordChange from './components/PasswordChange';
import CurrentStock from './components/Statistics/CurrentStock';
import SoldCards from './components/Statistics/SoldCards';
import Shops from './components/Statistics/Shops';
import Cashiers from './components/Statistics/Cashiers';
import Transactions from './components/Statistics/Transactions';

export default {
  path: '/',
  component: Main,
  indexRoute: { component: IndexView },
  childRoutes: [
    { path: 'users', component: Users },
    { path: 'contractors', component: Contractors },
    { path: 'orders', component: Orders },
    { path: 'status', component: Status },
    { path: 'stats', component: Stats, indexRoute: { onEnter: (nextState, replace) => replace('stats/current') }, childRoutes: [{ path: 'current', component: CurrentStock },{ path: 'sold', component: SoldCards },{ path: 'shops', component: Shops },{ path: 'cashiers', component: Cashiers }, { path: 'transactions', component: Transactions }] },
    { path: 'digital', component: DigitalOrders },
    { path: 'password', component: PasswordChange },
    { path: 'users/:id', component: EditUser },

    { path: '*', component: NotFound }

  ]
};
