import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

console.log(rootReducer())
const reduxStore = createStore(rootReducer, {

    

})


export default reduxStore;
