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
import CurrentStockReport from './components/reports/CurrentStockReport';
import SoldCards from './components/Statistics/SoldCards';
import SoldCardsReport from './components/reports/SoldCardsReport';
import Shops from './components/Statistics/Shops';
import Cashiers from './components/Statistics/Cashiers';
import Transactions from './components/Statistics/Transactions';
import Reports from './components/Reports';
import OrdersReport from './components/Reports/OrdersReport';
import CancelTransaction from './components/TransactionCancel';
import TransactionsStates from './components/TransactionsStates';

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
    { path: 'reports', component: Reports, indexRoute: { onEnter: (nextState, replace) => replace('reports/current') }, childRoutes: [{ path: 'current', component: CurrentStockReport },{ path: 'sold', component: SoldCardsReport },{ path: 'orders', component: OrdersReport }] },
    { path: 'digital', component: DigitalOrders },
    { path: 'cancelTransaction', component: CancelTransaction},
    { path: 'transactionstates', component: TransactionsStates},
    { path: 'password', component: PasswordChange },
    { path: 'users/:id', component: EditUser },

    { path: '*', component: NotFound }

  ]
};
