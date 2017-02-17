import { combineReducers } from 'redux';
import navActiveReducer from './navActiveReducer';
import navEnabledReducer from './navEnabledReducer';


const rootReducer = combineReducers({
  navActiveReducer,navEnabledReducer
});



export default rootReducer;
