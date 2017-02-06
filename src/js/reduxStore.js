import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'


const reduxStore = createStore(rootReducer, {sidebarActive: false,
      columns: [],
rows: []});
  

export default reduxStore;