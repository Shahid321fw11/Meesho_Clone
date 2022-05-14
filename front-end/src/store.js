import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Redux/Reducer/Main';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__);

export default store;
