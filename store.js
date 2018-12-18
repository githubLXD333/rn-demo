import { createStore } from 'redux';
import AppReducer from './App/ReactRedux/Reducer';

const store = createStore(AppReducer);

export default store;