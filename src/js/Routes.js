import Main from './Main';
import IndexView from './components/IndexView';
import NotFound from './components/NotFound';


export default {
  path: '/',
  component: Main,
  indexRoute: { component: IndexView },
  childRoutes: [
      // { path: 'add', component: TodoAddTaskForm  },
    { path: '*', component: NotFound }
    
  ]
};
